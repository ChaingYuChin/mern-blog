import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import DashBoard from './pages/DashBoard'
import SignUp from './pages/SignUp'
import Project from './pages/Project'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/project" element={<Project/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}
