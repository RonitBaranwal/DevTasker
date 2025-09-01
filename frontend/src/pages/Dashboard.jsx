// src/pages/Dashboard.jsx
import React, { useContext } from "react";
import StatCard from "../components/StatCard.jsx"
import Navbar from "../components/NavBar.jsx";
import { DashboardContext } from "../context/DashboardContext.jsx";

const Dashboard = () => {
  
  
  const focusTimeToday=localStorage.getItem('focus-time')
  const notesCount = JSON.parse(localStorage.getItem("notes")).length;
  console.log(notesCount)
  const { githubStats } = useContext(DashboardContext);

  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const completedTasks = tasks.filter(t => t.completed).length;
  
  return (
    <>
      <Navbar/>
    <div className='p-6 md:p-10'>
      <h1 className='text-3xl font-bold mb-6 text-black '>
        👋 Welcome back, Dev!
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <StatCard title='Total Tasks' value={tasks.length} icon='📋' />
        <StatCard title='Completed Tasks' value={completedTasks} icon='✅' />
        <StatCard title='Focus Time Today' value={Math.floor(focusTimeToday/60)+" Min"} icon='⏱️' />
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
