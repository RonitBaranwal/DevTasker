import React from "react";

const TaskItem = ({ completed, title,dispatch ,id}) => {
    const completeFunction = () => {
        console.log("Function runs")
        dispatch({ type: "COMPLETED", payload:{ id} })
        console.log(id);
    }
    const deleteFuntion = () => {
        console.log("delete funtion running")
        dispatch({ type: "DELETE", payload: { id } });
    }
    return (
        <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md'>
            <div className='flex items-center gap-3'>
                <input
                    type='checkbox'
                    defaultChecked={completed}
                    className='w-5 h-5 accent-blue-600'
                    onClick={completeFunction}
                />
                <span
                    className={`text-lg ${
                        completed
                            ? "line-through text-gray-500"
                            : "text-gray-800 dark:text-white"
                    }`}
                >
                    {title}
                </span>
            </div>
            <button className='text-red-500 hover:text-red-600 text-sm' onClick={deleteFuntion}>
                Delete
            </button>
        </div>
    );
};
export default TaskItem;
