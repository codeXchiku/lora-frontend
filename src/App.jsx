import React from 'react'
import SideBar from './components/SideBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Gateway from './pages/Gateway';

const App = () => {
  return (
    <>
    <div>
    <BrowserRouter>
    <SideBar/>
    <Routes>
      <Route path='/'element={<Dashboard/>}/>
      <Route path='/node'element={<Gateway/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App