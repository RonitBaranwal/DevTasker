import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import GithubCard from "../../components/GithubCard.jsx";
import { DashboardContext } from '../../context/DashboardContext.jsx';
const GithubLandingPage = () => {
    const [data, setData] = useState();
    const { setGithubStats } = useContext(DashboardContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.github.com/users/ronitbaranwal"
                );
                // const value = await data.json();
                setData(response.data);
                localStorage.setItem("github-repos", response.data.public_repos);
                localStorage.setItem("github-followers", response.data.followers);
                setGithubStats({
                    repos: response.data.public_repos,
                    followers: response.data.followers
                });
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    },[]);
   
  return (
      <>
          {!data ? (
              <div className='p-6 md:p-10'>Loading...</div>
          ) : (
              <div className='p-6 md:p-10 text-gray-800'>
                  <h2 className='text-3xl font-bold mb-6'>🐙 GitHub Profile</h2>

                  <div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-3xl mx-auto'>
                      <div className='flex items-center gap-6 mb-6'>
                          <img
                              src={data.avatar_url}
                              alt='Avatar'
                              className='w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-600'
                          />
                          <div>
                              <h3 className='text-2xl font-semibold text-amber-100'>
                                  {data.name}
                              </h3>
                              <p className='text-gray-500 dark:text-gray-400'>
                                  @{data.login}
                              </p>
                              <p className='mt-1 text-sm'>{data.bio}</p>
                          </div>
                      </div>

                      {/* Stats */}
                      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center'>
                          <GithubCard
                              data={data.public_repos}
                              valueFor={"Repos"}
                          />
                          <GithubCard
                              data={data.followers}
                              valueFor={"Followers"}
                          />
                          <GithubCard
                              data={data.following}
                              valueFor={"Following"}
                          />
                      </div>

                      {/* GitHub Link */}
                      <div className='mt-6 text-center'>
                          <a
                              href={data.html_url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'
                          >
                              View GitHub Profile
                          </a>
                      </div>
                  </div>
              </div>
          )}
      </>
  );
}

export default GithubLandingPage