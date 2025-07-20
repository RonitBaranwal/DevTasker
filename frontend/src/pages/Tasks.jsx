import React, { useReducer } from "react";
import TaskList from "../features/tasks/TaskList";
import Navbar from "../components/NavBar";

export const Tasks = () => {
    
    return (
        <>
            <Navbar/>
        <div className='p-6 md:p-10'>
            <h2 className='text-3xl font-bold mb-6 text-gray-800 '>
                📝 Task Manager
            </h2>
            <TaskList />
            
            
        </div>
        </>
    );
};
