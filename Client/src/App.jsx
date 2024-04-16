import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import About from './pages/About'
import Pages from './pages/Pages';
import Payment from './pages/Payment'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomeLayout/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/credits" element={<Pages mdpath="./md/credits.md" />} />
            <Route path="/terms" element={<Pages mdpath="./md/terms.md" />} />
            <Route path="/payment/:status" element={<Payment />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
