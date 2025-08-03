import React, {  useState } from 'react'
import { DashboardContext } from './DashboardContext';
const DashboardContextProvider = ({ children }) => {
    const [focusTimeToday, setFocusTimeToday] = useState(0);
    const [totalTasks, setTotalTasks] = useState(0);
    
    const [notesCount, setNotesCount] = useState(0);
    const [githubStats, setGithubStats] = useState({
        repos: 0,
        followers: 0,
    });
    
    return (
        <DashboardContext.Provider
            value={{
                focusTimeToday,
                setFocusTimeToday,
                totalTasks,
                setTotalTasks,
               
                notesCount,
                setNotesCount,
                githubStats,
                setGithubStats,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardContextProvider
