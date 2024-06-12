import React from 'react';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import ForgetPassword from './Pages/ForgetPassword';
import Resetpassword from './Pages/Resetpassword';
import FinalPage from './Pages/FinalPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Navbar/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/registerpage" element={<RegisterPage/>} />
        <Route path="/loginpage" element={<LoginPage/>} />
        <Route path="/finalpage" element={<FinalPage/>} />
        <Route path="/forgetPassword" element={<ForgetPassword/>} />
        <Route path="/reset-pswrd/:id/:token" element={<Resetpassword/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;