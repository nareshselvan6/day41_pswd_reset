import React, { useState } from 'react';
import"../Pages/Pages.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [registered,setRegistered]=useState()
  const navigate=useNavigate();
  
    const signup=async(e)=>{
      e.preventDefault();
      const payload={username,email,password}

    try {
      await axios.post("https://day-41-nodejs.onrender.com/register-user",payload)
      .then(res=>{setRegistered(res.data)}).catch((error)=>console.log(error))
  navigate('/loginpage')
    } catch (error) {
      console.error(error);
    }

      
    }
            

    return (
        <div>
          <div className='totalcontent'>
          <div className='registerpage'>
          <div className='pagetitle'>
          <h2>Register Here!</h2>
          </div>
          <div className='content-body'>
                <form className='form' onSubmit={signup}>
                  <label> UserName</label>
                    <input type="text" placeholder='johndoe16'  onChange={(e) => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder='johndoe@gmail.com'  onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className='btn btn-primary'>Signup</button>
                    <Link to="/loginpage" >Already Have An Account</Link>
                </form>
            </div>
          </div>
          </div>
          </div>

    );
};

export default RegisterPage;