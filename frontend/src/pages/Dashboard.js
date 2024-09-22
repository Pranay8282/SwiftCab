import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import userProfile from '../images/userProfile.webp'
import VerifiedIcon from '@mui/icons-material/Verified';
const Dashboard = () => {
  const [response, setResponse] = useState("");
  const api = useAxios();
  const token = localStorage.getItem("authTokens");
  const { logoutUser } = useContext(AuthContext);

  if (token) {
    const decode = jwtDecode(token);
    console.log(decode);
    let user_id = decode.user_id;
    let username = decode.username;
    let email = decode.email;
    let full_name = decode.full_name;
    const phoneNumber = localStorage.getItem(`${username}Phone`);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get("/test/");
          setResponse(response.data.response);
        }
        catch (error) {
          console.log(error);
          setResponse("Something went wrong")
        }
      }
      fetchData();
    }, []);

    function capitalizeWords(string) {
      return string
        .split(' ')             // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
        .join(' ');             // Join the array back into a string
    }
    return (
      <div>
        <header className="bg-dark text-white mb-4">
          <div className="container d-flex justify-content-between align-items-center">
           <Link to='/' style={{color:'white',textDecoration:'none'}}> <h1 className="mb-0">SwiftCab</h1></Link>
            <div className='d-flex justify-content-end align-items-center'>
              <button className="btn text-white" style={{ marginLeft: "10px" }}>Help</button>
              <Link to='/' className="btn text-white">Home</Link>
            </div>
          </div>
        </header>
        <div className="container-lg mt-5">
          <div className="border p-5" style={{ borderRadius: "25px" }}>
            <div className="card-body">
              <h3 className="card-title">Account Info</h3>
              <div className="mb-4">
                <img
                  src={userProfile}
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <h4>Basic Info</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid #ddd" }}>
                  <div>
                    <span style={{ fontWeight: "600", fontSize: "18px" }}>Name</span>
                    <p>{capitalizeWords(full_name)}</p>
                  </div>
                  <span style={{ fontSize: "18px" }}>{'>'}</span>
                </li>
                {phoneNumber ? <>
                  <Link to='/verify-phone-number' style={{ textDecoration: "none" }} ><li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid #ddd", }}>
                    <div>
                      <span style={{ fontWeight: "600", fontSize: "18px" }}> Phone Number</span>
                      <p>{phoneNumber}</p>
                    </div>
                    <span style={{ fontSize: "18px" }}>
                      <VerifiedIcon/>
                    </span>
                  </li></Link>
                </> : <>
                  <Link to='/verify-phone-number' style={{ textDecoration: "none" }} ><li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid #ddd", }}>
                    <div>
                      <span style={{ fontWeight: "600", fontSize: "18px" }}>Verify Phone Number</span>
                    </div>
                    <span style={{ fontSize: "18px" }}>{'>'}</span>
                  </li></Link>
                </>}

                <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid #ddd", marginTop: "3px", marginBottom: "3px" }}>
                  <div>
                    <span style={{ fontWeight: "600", fontSize: "18px" }}>Email</span>
                    <p>{email}</p>
                  </div>
                  <span style={{ fontSize: "18px" }}>{'>'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Dashboard


