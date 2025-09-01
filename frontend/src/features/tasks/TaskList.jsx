import React, { useEffect, useReducer } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm.jsx";
import { reducer } from "./../../hooks/TaskReducer.js";
const getAllTasks = () => {
    try {
        const stored = JSON.parse(localStorage.getItem("tasks"));
        return Array.isArray(stored) ? stored : [];
    } catch {
        return [];
    }
};

const inititalState = {
    tasks: getAllTasks(),
    hasIntialized: false,
};

const TaskList = () => {
    const [state, dispatch] = useReducer(reducer, inititalState);

    useEffect(() => {
        const data = getAllTasks();
        dispatch({ type: "INIT_TASKS", payload: data });
    }, []);

    useEffect(() => {
        if (state.hasIntialized) {
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        }
    }, [state.tasks, state.hasIntialized]);

    return (
        <>
            <div className='space-y-4 mb-10'>
                {state.tasks.map((currTask) => (
                    <TaskItem
                        key={currTask.taskId}
                        title={currTask.title}
                        completed={currTask.completed}
                        id={currTask.taskId}
                        dispatch={dispatch}
                    />
                ))}
            </div>
            <TaskForm state={state} dispatch={dispatch} />
        </>
    );
};

export default TaskList;
