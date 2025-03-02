import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import "./app.css"
import MainSession from './components/MainSession';
import LiblatyBucket from './components/Mainsession/LiblatyBucket';
import Coverage from './components/Mainsession/Coverage';
import AppointmentHistory from './components/Mainsession/Transition';

export default function App() {

  return (
    <Router>
           <div className="h-full w-full">
             <Topbar />
             <div className="flex ">
               <div className=" bg-blue-500  sideheight">
                <Sidebar/>
                </div>
               <div className='mainsession'>
               <Routes>
                <Route path="/" element={<MainSession />} />
                <Route path="/dashboard" element={<LiblatyBucket />} />
                <Route path="/patients" element={<Coverage />} />
                <Route path="/appointments" element={<AppointmentHistory />} />
                <Route path="/bucket" element={<MainSession />} />
                <Route path="/coverage" element={<MainSession />} />
                <Route path="/transition" element={<MainSession />} />
                <Route path="/care-plan" element={<MainSession />} />
                <Route path="/Work-List" element={<MainSession />} />
               </Routes>
               </div>
             </div>
           </div>
         </Router>
  )
}
