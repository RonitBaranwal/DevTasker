import React, { useReducer } from "react";
import TaskItem from "./TaskItem";
import TaskReducer from "./TaskReducer";
import Navbar from "../../components/NavBar";
const inititalState = {
    tasks: [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        title: action.payload.title,
                        completed: false,
                        taskId: Date.now(),
                    },
                ],
            };
        case "COMPLETED":
            console.log(action.payload.id);
            return {
                ...state,
                tasks: state.tasks.map((t) =>
                    t.taskId === action.payload.id
                        ? { ...t, completed: !t.completed }
                        : t
                ),
            };
        case "DELETE":
            return {
                ...state,
                tasks: state.tasks.filter((t) => t.taskId !== action.payload.id)
            }
        default:
            return state;
    }
};
const TaskList = () => {
    
    const [state, dispatch] = useReducer(reducer, inititalState);
    return (
      <>
        
            <div className='space-y-4 mb-10'>
                <TaskItem
                    title='Finish React project'
                    completed={false}
                    dispatch={dispatch}
                />
                <TaskItem
                    title='Push to GitHub'
                    completed={true}
                    dispatch={dispatch}
                />
                <TaskItem
                    title='Take a break ☕'
                    completed={false}
                    dispatch={dispatch}
                />
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
            <TaskReducer state={state} dispatch={dispatch} />
        </>
    );
};

export default TaskList;
