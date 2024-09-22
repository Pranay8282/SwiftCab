import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
const Home = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  if (user) {
    const decoded = jwtDecode(token)
    let user_id = decoded.user_id;
  }

  return (
    <div className='container-lg d-flex align-items-center justify-content-center mt-5 mb-5' style={{ flexDirection: "column",background:"lightgray" }}>
      <h1>Home</h1>
      <p>This is Home Page</p>

      {user ?
        <>
          <span>You are Logged in</span>
          <br></br>
          <br></br>
          <br></br>
          <Link to='/dashboard'>Dashboard</Link>
          <br></br>
          <Link onClick={logoutUser}>Log out</Link>
        </> :
        <>
          <span>You are not Logged in</span>
          <br></br>
          <br></br>
          <br></br>
          <Link to='/login'>Login</Link>
          <br></br>
          <Link to='/signup'>Signup</Link>
        </>
      }
    </div>
  )
}

export default Home
