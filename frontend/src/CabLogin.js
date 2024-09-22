import React from 'react';
import './CabLogin.css';
import Rider from './images/Rider.svg'
import Navbar from './Navbar';
import './Navbar.css'
import Footer from './Footer';
import {Link} from "react-router-dom"
const SwiftCabLogin = () => {
  return (
    <>
      <Navbar />
      <div style={{backgroundColor:"white"}}>
        <div className="login-container">
          <div>
            <div class="row align-items-center">
              <div class="col">
                <div style={{ padding: "50px" }}>
                  <h1 className="login-text">Log in to access your account</h1>
                </div>
              </div>
              <div class="col">
                <div className="login-image" style={{ padding: "30px" }}>
                  <img src={Rider} alt="Login Illustration" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links-container">
          <Link to="/login" className="login-link">
            <span>Driver</span>
            <span className="arrow">→</span>
          </Link>
          <Link to="/login" className="login-link">
            <span>Rider</span>
            <span className="arrow">→</span>
          </Link>
        </div>
        <Footer/>
      </div>

    </>
  );
};

export default SwiftCabLogin;
