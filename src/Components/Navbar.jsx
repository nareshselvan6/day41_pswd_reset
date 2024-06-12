import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Navbar.css"
const Navbar = () => {
    return (
        <div>
               <div>
      <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/registerpage'>Registration </Link>
        </li>
        <li className="nav-item">
        <Link to='/loginpage'>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
            
        </div>
    );
};

export default Navbar;