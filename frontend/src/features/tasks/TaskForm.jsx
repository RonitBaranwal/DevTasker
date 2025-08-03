import React, { useState } from "react";

const TaskForm = ({ dispatch }) => {
    const [task, setTask] = useState("");
    return (
        <form className='flex flex-col sm:flex-row gap-4 mb-6'>
            <input
                type='text'
                placeholder='What needs to be done?'
                className='flex-1 px-4 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-white'
                onChange={(e) =>
                    setTask(e.target.value)
                }
                value={task}
            />
            <button
                type='submit'
                className='bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition'
                onClick={(e) => {
                    e.preventDefault()
                    dispatch({ type: "ADD", payload: {title:task} })
                    setTask("");
                }}
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
