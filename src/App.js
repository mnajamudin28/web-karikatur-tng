import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graduation from './component/ThemesImg/Graduation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="graduation" element={<Graduation />} />
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
