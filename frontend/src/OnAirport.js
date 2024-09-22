import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import airports from './airports';
import Navbar from './Navbar';
import Footer from './Footer';
import './Ride.css'
import { Carousel } from "react-bootstrap";
import X from './images/SwiftCabX.webp'
import texi from './images/SwiftCabAuto.webp'
import XL from './images/SwiftCabXL.webp'
import moto from './images/SwiftCabMoto.webp'
import { FaSquare } from "react-icons/fa"
import './OnAirport.css'
import airportImage from './images/CabAirport.jpg' 
const OnAirport = () => {
    const { code } = useParams();
    const airport = airports.find((airport) => airport.code === code);
    const airportName = airport.name;
    if (!airport) {
        return <p>Airport not found</p>;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hoveredLink, setHoveredLink] = useState(null);

    const linkStyle = {
        color: hoveredLink === 'link1' ? 'gray' : 'black',
        fontSize: "13px"
    };

    const linkStyle2 = {
        color: hoveredLink === 'link2' ? 'gray' : 'black',
        fontSize: "13px"
    };

    const linkStyle3 = {
        color: hoveredLink === 'link3' ? 'gray' : 'black',
        fontSize: "13px"
    };
    return (<>
        <div className='homepage-container' style={{ backgroundColor: "white" }}>
            <Navbar />
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white', flexDirection: "column" }}>
                <div className="container-fluid">
                    {/* Left-aligned link */}
                    <Link className="navbar-brand ms-lg-5" to="/Ride" id="rideLink">
                        Ride
                    </Link>

                    {/* Right-aligned link */}
                    <div className="d-flex pl-5" id="airportLink">
                        <div>
                            <Link
                                style={linkStyle}
                                className="navbar-brand"
                                name="1"
                                onMouseEnter={() => setHoveredLink('link1')}
                                onMouseLeave={() => setHoveredLink(null)}
                                to={`/airportPickup/${code}`}
                            >
                                {code} pickup
                            </Link>
                        </div>
                        <div>
                            <Link
                                style={linkStyle2}
                                className="navbar-brand"
                                name="2"
                                onMouseEnter={() => setHoveredLink('link2')}
                                onMouseLeave={() => setHoveredLink(null)}
                                to="/book-ride"
                            >
                            </Link>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white', marginLeft: "30vh" }}>
                    <div className="d-flex" style={{ display: 'flex', alignItems: 'center', marginLeft: "10vh" }}>
                        <Link to="/" style={{ color: "black" }}>Home</Link>
                        <span style={{ marginLeft: '3px', marginRight: '3px', color: "black" }}>{'>'}</span>
                        <Link to="/ride" style={{ color: "black" }}>Ride</Link>
                        <span style={{ marginRight: '3px', marginLeft: '3px', color: "black" }}>{'>'}</span>
                        <Link to="/AirportRide" style={{ color: "black" }}>Airports</Link>
                        <span style={{ marginRight: '3px', marginLeft: '3px', color: "black" }}>{'>'}</span>
                        <p style={{ color: "black", paddingTop: "15px" }}>{code}</p>
                    </div>
                </nav>
            </nav>

            <div className="container-lg text-center" style={{ border: "none", }}>

                <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="col" style={{ paddingTop: "25vh", paddingBottom: "25vh", textAlign: "left" }}>
                        <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "45px", paddingLeft: "20px", color: "black" }}>Schedule your ride to {airportName}</h1>
                        <h6 style={{ fontFamily: "Poppins, sans-serif", paddingLeft: "20px", fontWeight: "300", color: "black", marginTop: "10vh" }}>Give us a few details, and we’ll find you a ride to the airport.</h6>
                        <div className="container-fluid" style={{ paddingTop: "20px" }}>
                            <form>
                                <div className="input-group">
                                    <input type="text" id="source" style={{ borderRadius: "8px" }} required placeholder='____' />
                                    <label htmlFor="source">Source</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" id="destination" style={{ borderRadius: "8px" }} placeholder='_____' />
                                    <label htmlFor="destination">Destination</label>
                                </div>
                                <div>
                                    <button style={{ borderRadius: "8px", fontSize: "17px", padding: "13px", marginRight: "20px" }} type="submit">Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <img style={{ display: "block", width: "100%", height: "100%", transform: "scaleX(-1)", maxHeight: "100%" }} src={airportImage} alt='image1' />
                    </div>
                </div>
            </div>
            <div className="container-lg mt-5" style={{ color: "black" }}>
                <h2>Getting to {code} Airport</h2>
                <p style={{ color: "gray", marginTop: "5%" }}>
                    Fly to/from {airportName}. Skip the stress of arranging a
                    ground transportation by claiming a ride with Uber. You can plan your trip, have private
                    rides to and from the airport, and connect with the driver via the app.
                </p>

                <h3 style={{ marginTop: "30px" }}>{code} airline terminals</h3>
                <p style={{ color: "gray", marginTop: "3%" }}>
                    Please note that some airlines fly out of multiple terminals. Visit the official airport website to check for any service changes.
                </p>

                <h3 style={{ marginTop: "10vh" }}>Your car options to {code}</h3>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-6">
                        <h5>Popular</h5>
                        <Carousel>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={X}
                                    alt="SwiftCab Go"
                                />
                                <div >
                                    <h5>Go Intercity</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px" }}>1-4</p>
                                </div>
                                <p>Affordable outstation rides in compact cars</p>
                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={X}
                                    alt="Premier"
                                />
                                <div >
                                    <h5>Sedan Intercity</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-4</p>
                                    <p>Outstation rides in comfortable sedans</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={X}
                                    alt="SwiftCab Go"
                                />
                                <div >
                                    <h5>XL Intercity</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-6</p>
                                </div>
                                <p>Outstation rides in spacious SUVs</p>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <h5>Economy</h5>
                        <Carousel>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img className="d-block w-75" src={X} alt="SwiftCab Go" />
                                <div >
                                    <h5>Go Priority</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-4</p>
                                </div>
                                <p>Affordable, compact rides</p>
                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={X}
                                    alt="SwiftCab Go"
                                />
                                <div >
                                    <h5>SwiftCab Go</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-4</p>
                                </div>
                                <p>Affordable compact rides</p>
                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={X}
                                    alt="SwiftCab Go"
                                />

                                <div >
                                    <h5>Premier</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-4</p>
                                </div>
                                <p>Comfortable sedans, top-quality drivers</p>

                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={X}
                                    alt="SwiftCab Go"
                                />

                                <div >
                                    <h5>Request any</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-6</p>
                                </div>
                                <p>Save time with the first available ride</p>

                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={texi}
                                    alt="SwiftCab Go"
                                />

                                <div >
                                    <h5>SwiftCabAuto</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-3</p>
                                </div>
                                <p>Auto rickshaws at the tap of a button</p>

                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={moto}
                                    alt="SwiftCab Go"
                                />

                                <div >
                                    <h5>Uber Moto</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1</p>
                                </div>
                                <p>Affordable, motorcycle rides</p>

                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={XL}
                                    alt="SwiftCab Go"
                                />

                                <div>
                                    <h5>SwiftCabXL</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", margin: "10px", padding: "6px", alignItems: "center" }}>1-6</p>
                                </div>
                                <p>Comfortable SUVs</p>

                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={moto}
                                    alt="SwiftCab Go"
                                />

                                <div >
                                    <h5>Moto Saver</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1</p>
                                </div>
                                <p>Wait a little for discounted Moto rides</p>

                            </Carousel.Item>
                            <Carousel.Item style={{ marginBottom: "10vh" }}>
                                <img
                                    className="d-block w-75"
                                    src={X}
                                    alt="SwiftCab Go"
                                />

                                <div >
                                    <h5>Go Sedan</h5>
                                    <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-4</p>
                                </div>
                                <p>Affordable, compact rides</p>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className="container-lg mt-5 mb-5" >
                    <h2 className="mb-4">Pickup at {airportName} ({code})</h2>
                    <div className="row">
                        <div className="col-md-1 d-flex flex-column align-items-center">
                            <div className="timeline-icon">
                                <FaSquare />
                            </div>
                            <div className="timeline-line flex-grow-1"></div>
                            <div className="timeline-icon">
                                <FaSquare />
                            </div>
                            <div className="timeline-line flex-grow-1"></div>
                            <div className="timeline-icon">
                                <FaSquare />
                            </div>
                        </div>
                        <div className="col-md-11">
                            <div className="timeline-item mb-5">
                                <h5>Request when you're ready to walk outside</h5>
                                <p>Choose a ride option that suits your group size and luggage storage needs.</p>
                            </div>
                            <div className="timeline-item mb-5">
                                <h5>Exit at the airport arrivals</h5>
                                <p>
                                    Head outside to the passenger pickup area. This is where all Uber driver-partners meet
                                    travelers for pickup.
                                </p>
                            </div>
                            <div className="timeline-item">
                                <h5>Look for your driver</h5>
                                <p>If you can’t find your driver, contact them through the app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer /></>
    );
};

export default OnAirport;
