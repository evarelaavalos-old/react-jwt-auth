import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home.jsx';
import LogIn from '../components/LogIn/LogIn.jsx';
import SignUp from '../components/SignUp/SignUp.jsx';
import Smoothies from '../components/Smoothies/Smoothies.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/smoothies' element={<Smoothies />} />
    </Routes>
  );
}
