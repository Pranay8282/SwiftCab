import React, { useState } from 'react';
import './Home.css';
import "./Navbar.css";
import img1 from "./images/1.png";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import earner from  './images/earner-illustra.webp'
import { useNavigate } from 'react-router-dom';
import Home from './images/cabRide (3).jpeg'
import earnerIllustation from './images/cabEarner-illustraion (3).jpeg'

const CabHome = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("authTokens");

    const handleBooking = ()=>{
        if (token){
            navigate('/ride');
        }
        else{
            navigate('/login');
        }
    }
    

    const handleDrive = ()=>{
        if (token){
            navigate('/select-vehicle');
        }
        else{
            navigate('/login');
        }
    }


    return (<>
        <div className='homepage-container'>
            <Navbar />
            <div className="container text-center">
                <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="col" style={{ paddingTop: "25vh", paddingBottom: "25vh", textAlign: "left" }}>
                        <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "45px", paddingLeft: "20px", color: "beige" }}>Go anywhere with SwiftCab.</h1>
                        <h6 style={{ fontFamily: "Poppins, sans-serif", paddingLeft: "20px", color: "beige" }}>Request a ride, hop in, and go.</h6>

    
                    </div>
                    <div className="col">
                        <img style={{ display: "block", width: "100%", height: "100%", transform: "scaleX(1)", borderRadius: "10px" }} className='zoom-sensitive-image' src={Home} alt='image1' />
                    </div>
                </div>
            </div>
        </div>
        <div className="container-lg mt-5 mb-5">
            <h3 className="mb-4" style={{ color: 'black' }}>Suggestions</h3>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100" style={{ backgroundColor: "#F1F1F1", border: "none" }}>
                        <Link to="/Driver" className="text-decoration-none text-dark">
                            <div className="card-body d-flex">
                                <div className="flex-grow-1">
                                    <h5 className="card-title">Driver Login</h5>
                                    <p className="card-text">Login and register Your car.</p>
                                    <button className="btn btn-outline-secondary" style={{ color: "black", borderRadius: "30px" }}><Link to="/book-ride"></Link>Details</button>
                                </div>
                                <img
                                    src="https://mobile-content.uber.com/launch-experience/ride.png"
                                    alt="Ride"
                                    className="img-fluid"
                                    style={{ width: '100px', objectFit: 'contain' }}
                                />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100" style={{ backgroundColor: "#F1F1F1", border: "none" }}>
                        <Link to="/book-ride" className="text-decoration-none text-dark">
                            <div className="card-body d-flex">
                                <div className="flex-grow-1">
                                    <h5 className="card-title">Ride</h5>
                                    <p className="card-text">Go anywhere with SwiftCab. Request a ride, hop in, and go</p>
                                    <button className="btn btn-outline-secondary" style={{ color: "black", borderRadius: "30px" }}><Link to="/book-ride"></Link>Details</button>
                                </div>
                                <img
                                    src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                                    alt="Reserve"
                                    className="img-fluid"
                                    style={{ width: '100px', objectFit: 'contain' }}
                                />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        <Footer /></>
    );
}

export default CabHome;
