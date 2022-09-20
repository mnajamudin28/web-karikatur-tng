import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graduation from './component/ThemesImg/Graduation';
import Wedding from './component/ThemesImg/Wedding';
import Family from './component/ThemesImg/Family';
import Kids from './component/ThemesImg/Kids';
import Group from './component/ThemesImg/Group';
import Friends from './component/ThemesImg/Friends';
import Uniform from './component/ThemesImg/Uniform';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="graduation" element={<Graduation />} />
          <Route path="wedding" element={<Wedding />} />
          <Route path="family" element={<Family />} />
          <Route path="group" element={<Group />} />
          <Route path="kids" element={<Kids />} />
          <Route path="friends" element={<Friends />} />
          <Route path="uniform" element={<Uniform />} />
          <Route path="about-us" element={<AboutUs />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />  */}
        {/* dalam tanda kutip untuk menuju /produc etc, di element adalah file jsx */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
