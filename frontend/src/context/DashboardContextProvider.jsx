import React, {  useState } from 'react'
import { DashboardContext } from './DashboardContext';
const DashboardContextProvider = ({ children }) => {
    
    
    const [notesCount, setNotesCount] = useState(0);
    const [githubStats, setGithubStats] = useState({
        repos: 0,
        followers: 0,
    });
    
    return (
        <DashboardContext.Provider
            value={{               
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
