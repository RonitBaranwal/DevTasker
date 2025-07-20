// src/pages/Dashboard.jsx
import React from "react";
import StatCard from "../components/StatCard.jsx"
import Navbar from "../components/NavBar.jsx";

const Dashboard = () => {
  // 🔧 These will come from context/hooks later
  const totalTasks = 5;
  const completedTasks = 7;
  const focusTimeToday = "1h 30m";
  const notesCount = 2;
  const githubStats = {
    repos: 3,
    followers: 20,
  };
  return (
    <>
      <Navbar/>
    <div className='p-6 md:p-10'>
      <h1 className='text-3xl font-bold mb-6 text-black '>
        👋 Welcome back, Dev!
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <StatCard title='Total Tasks' value={totalTasks} icon='📋' />
        <StatCard title='Completed Tasks' value={completedTasks} icon='✅' />
        <StatCard title='Focus Time Today' value={focusTimeToday} icon='⏱️' />
        <StatCard title='Notes' value={notesCount} icon='📝' />
        <StatCard title='GitHub Repos' value={githubStats.repos} icon='📦' />
        <StatCard
          title='GitHub Followers'
          value={githubStats.followers}
          icon='👥'
        />
      </div>
      </div>
      </>
  );
};

export default Dashboard;
