import React, { useState } from 'react';
import"../Pages/Pages.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [registered,setRegistered]=useState();
      const navigate=useNavigate();

        const login=async(e)=>{
          e.preventDefault();
          const payload={email,password}
          try {
             await axios.put("http://localhost:5000/api/login-user",payload)
             .then(res=>{setRegistered(res.data)}).catch((error)=>console.log(error));

             if (email===registered.loginuser.email) {
                navigate("/finalpage")
             }

          } catch (error) {
            console.error(error);
            
          }
           
        }            

    return (
        <div>
             <div className='totallogincontent'>
          <div className='Loginpage'>
          <div className='pagetitle'>
          <h2>Login Here!</h2>
          </div>
          <div className='content-body'>
                <form className='form' onSubmit={login} >
                    <label>Email</label>
                    <input type="email" placeholder='johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="*******"  onChange={(e) => setPassword(e.target.value)}/>
                    <Link to="/forgetPassword" className='white'>Forgot Password?</Link>
                    <button type='submit' className='btn btn-primary'>Login</button>
                   
                </form>
            </div>
          </div>
          </div>
           
          </div>
    );
};

export default LoginPage;