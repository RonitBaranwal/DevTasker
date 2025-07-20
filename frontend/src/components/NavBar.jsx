// src/layout/Navbar.jsx
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className='bg-white dark:bg-gray-900 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    {/* Logo / Brand */}
                    <div className='flex items-center'>
                        <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                            DevTasker
                        </span>
                    </div>

                    {/* Nav Links */}
                    <div className='hidden md:flex space-x-6'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `text-sm font-medium ${
                                    isActive
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-200"
                                } hover:text-blue-600`
                            }
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to='/task'
                            className={({ isActive }) =>
                                `text-sm font-medium ${
                                    isActive
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-200"
                                } hover:text-blue-600`
                            }
                        >
                            Tasks
                        </NavLink>
                        <NavLink
                            to='/timer'
                            className={({ isActive }) =>
                                `text-sm font-medium ${
                                    isActive
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-200"
                                } hover:text-blue-600`
                            }
                        >
                            Timer
                        </NavLink>
                        <NavLink
                            to='/notes'
                            className={({ isActive }) =>
                                `text-sm font-medium ${
                                    isActive
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-200"
                                } hover:text-blue-600`
                            }
                        >
                            Notes
                        </NavLink>
                        <NavLink
                            to='/github'
                            className={({ isActive }) =>
                                `text-sm font-medium ${
                                    isActive
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-200"
                                } hover:text-blue-600`
                            }
                        >
                            GitHub
                        </NavLink>
                    </div>

                    {/* Theme Toggle Placeholder */}
                    <div className='ml-4'>
                        {/* Replace this div with a <ThemeToggle /> component when ready */}
                        <button
                            className='text-gray-700 dark:text-gray-200 hover:text-blue-600 text-sm'
                            onClick={() => alert("Hook up dark mode here!")}
                        >
                            🌓
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
