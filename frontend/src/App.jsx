import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Github from "./pages/Github";
import Timer from "./pages/Timer";
import Notes from "./pages/Notes";
import { Tasks } from "./pages/Tasks";
import Navbar from "./components/NavBar";
const App = () => {
    return (
        <Routes>
            
            <Route path='/' element={<Dashboard />} />
            <Route path='/github' element={<Github />} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/task' element={<Tasks />} />
        </Routes>
    );
};

export default App;
