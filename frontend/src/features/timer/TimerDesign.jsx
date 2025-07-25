// src/pages/Timer.jsx
import React, { useRef, useState } from "react";

const TimerDesign = () => {
    const [timer, setTimer] = useState(0);
    
    const [totalTime, setTotalTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerIdRef = useRef(null);
    const startTimer = () => {
        if (timerIdRef.current !== null) return;
        timerIdRef.current = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);
        setIsRunning(true);
    }
    const endTimer = () => {
        if (timerIdRef.current) {
            console.log(timerIdRef.current)
            clearInterval(timerIdRef.current);
            timerIdRef.current = null;
            setIsRunning(false);
        }

    }

    const resetTimer = () => {
        endTimer();
        setTotalTime(prev => prev + timer);
        setTimer(0);
    }
    return (
        <div className='p-6 md:p-10 flex flex-col items-center justify-center text-center  '>
            <h2 className='text-3xl font-bold mb-8'>⏱️ Focus Timer</h2>

            
            <div className='text-6xl font-mono mb-6 bg-gray-100 dark:bg-gray-800 px-10 py-6 rounded-lg shadow-lg text-white'>
                {String(Math.floor(timer / 60)).padStart(2, "0")}:
                {String(timer % 60).padStart(2, "0")}
            </div>

            
            <div className='flex gap-6 mb-10'>
                <button
                    className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition'
                    onClick={startTimer}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button
                    className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition'
                    onClick={endTimer}
                    disabled={!isRunning}
                >
                    Pause
                </button>
                <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition' onClick={resetTimer}>
                    Reset
                </button>
            </div>

            {/* Focus Summary (Optional) */}
            <div className='text-sm text-gray-500 dark:text-gray-400'>
                You've focused for <strong>1h 20m</strong> today. Keep it up! 🚀
            </div>
        </div>
    );
};

export default TimerDesign;
