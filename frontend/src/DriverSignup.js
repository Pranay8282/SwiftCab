import React, { useEffect } from 'react';
import google from './images/google.svg'
import axios from 'axios';
import {Link} from 'react-router-dom';

const DriverSignup = () => {
      const [email, setEmail] = React.useState("");
      const [user, setUser] = React.useState("");
      const [pass, setPass] = React.useState("");
      const [passAgain, setPassAgain] = React.useState("");
      const fetchData = () => {
        axios.post("http://127.0.0.1:8000/drivesigncreate/", {user : user,email : email,password : pass,passAgain:passAgain}
        ).then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
      }
      useEffect(()=>{
        fetchData();
      },[]);
    return (
        <>
            <div
                className="row"
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    paddingLeft: '10vh',
                    paddingTop: '2.5vh',
                    paddingBottom: '2.5vh',
                }}
            >
                <div className="col-md-4">
                    <h1>SwiftCab</h1>
                </div>
            </div>
            <div className="container-lg mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                        <h3 className="text-center mb-4 mt-4">Sign Up to Drive</h3>
                        <form onSubmit={fetchData}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter Username"
                                    className="form-control mt-3 mb-3"
                                    onChange={(e) => setUser(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name="emailPhone"
                                    placeholder="Enter email"
                                    className="form-control mt-3 mb-3"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    className="form-control mt-3 mb-3"
                                onChange={(e) => setPass(e.target.value)}
                                />
                                <input
                                    type="password"
                                    name="passAgain"
                                    placeholder="rewrite password"
                                    className="form-control mt-3 mb-3"
                                onChange={(e) => setPassAgain(e.target.value)}
                                />
                            </div>
                            <Link to='/select-vehicle' style={{color:"white",textDecoration:"none"}}><button
                                type="submit"
                                style={{ backgroundColor: 'black', borderColor: 'black' }}
                                className="btn btn-dark w-100 mt-4 p-3"
                            >
                               Continue
                            </button></Link>
                        </form>
                        <div
                            style={{ display: 'flex', alignItems: 'center', margin: '5vh 0vh' }}
                        >
                            <hr style={{ flex: 1, margin: '0 10px' }} className="my-4" />
                            <p style={{ margin: 0 }}>OR</p>
                            <hr style={{ flex: 1, margin: '0 10px' }} className="my-4" />
                        </div>
                        <div className="d-flex flex-column align-items-center pb-4">
                            {/* Continue with Google Button */}
                            <button
                                className="btn btn-outline-dark"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '300px',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                }}
                            >
                                <img
                                    src={google}
                                    alt="Google logo"
                                    style={{ width: '20px', marginRight: '10px' }}
                                />
                                Continue with Google
                            </button>
                        </div>
                        <hr style={{ flex: 1, margin: '0px 10px' }} className="my-4" />
                        <div style={{ display: 'flex', alignItems: 'center', margin: '5vh 0vh' }}>
                            By proceeding, you consent to get calls, WhatsApp or SMS messages,
                            including by automated means, from Uber and its affiliates to the
                            number provided.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DriverSignup;
