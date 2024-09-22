import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Import Google Login
import AuthContext from '../context/AuthContext';

function Login() {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password);
  };

  const [hover, setHover] = useState(null);
  const style = {
    textDecoration: hover === "link" ? "underline" : "none",
    color: hover === 'link' ? "gray" : "black",
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* Provide your client ID */}
      <div className='row' style={{ backgroundColor: "black", color: "white", fontFamily: "Poppins, sans-serif", paddingLeft: "10vh", paddingTop: "2.5vh", paddingBottom: "2.5vh" }}>
        <div className='col-md-4'>
          <h1><Link to='/' style={{color:'white',textDecoration:'none'}}>SwiftCab</Link></h1>
        </div>
      </div>
      <div className="container-lg mt-5">
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <h3 className="text-center">What's your phone number or email?</h3>
            <form onSubmit={handleLogin}>
              <div className="form-group" style={{ marginTop: "5vh" }}>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email "
                />
              </div>

              <div className="form-group" style={{ marginTop: "2vh" }}>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button style={{ backgroundColor: "black", borderColor: "black" }}
                type="submit" className="btn btn-dark w-100 mt-4">
                Continue
              </button>

              <div className="d-flex align-items-center justify-content-center mt-3">
                <span>Don't have an account ? <Link style={style} onMouseEnter={() => { setHover("link") }} onMouseLeave={() => { setHover(null) }} to='/signup'>Signup</Link></span>
              </div>
            </form>

            

            <hr style={{ flex: 1, margin: "0 10px" }} className="my-4" />

            <div style={{ display: "flex", alignItems: "center", margin: "5vh 0" }}>
              By proceeding, you consent to get calls, WhatsApp, or SMS messages, including by automated means, from SwiftCab and its affiliates to the number provided.
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
