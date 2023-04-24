import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const AppRouter = () => {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />

        <Route path="*" element={Notfound} />
      </Routes>
</BrowserRouter>
  )
}

export default AppRouter