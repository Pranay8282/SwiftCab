import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import airports from './airports';
import Navbar from './Navbar';
import Footer from './Footer';
import './Ride.css'
import { Carousel } from "react-bootstrap";
import X from './images/SwiftCabX.webp'
import { FaSquare } from "react-icons/fa"
import './OnAirport.css'
import { FaExchangeAlt, FaRedo } from "react-icons/fa";
import XPerson from './images/uberXwithperson.png'
import twocar from './images/twoCar.png'
import carStar from './images/carwithstar.png'
import motoYellow from './images/Uber_Moto_yellow.png'
import XlPackage from './images/package_UberXL_new.png'
import airportDropoff from './images/CabAirportDropOff (3).jpg'

const FromAirport = () => {
    const { code } = useParams();
    const faqItems = [
        {
            question: 'Where do I meet my driver for pickup?',
            answer: `Pickup locations may depend on the type of ride you request and the size of the airport. Follow the instructions in the app about where to meet your driver. You can also look for signs that point to designated airport rideshare zones.
            If you can’t find your driver, contact them through the app.`,
        },
        {
            question: `How much will my Uber trip from ${code} cost?`,
            answer: `The cost of an Uber trip from ${code} Airport depends on factors that include the type of ride you request, the estimated length and duration of the trip, tolls, and current demand for rides.

            You can see an estimate of the price before you request by going here and entering your pickup spot and destination. Then when you request a ride, you'll see your actual price in the app based on real-time factors.`,
        },
        {
            question: 'How many pieces of luggage will fit in the vehicle I request through SwiftCab?',
            answer: 'The luggage capacity varies by SwiftCab ride type. For example, an SwiftCabX ride can usually hold 2 suitcases while an SwiftCabXL ride can usually hold 3 suitcases.*',
        },
    ];
    const buttonStyle = {
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#000",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
    }
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
    const [source, setSource] = useState(airportName);
    const [destination, setDestination] = useState("");

    // Function to swap the values of source and destination
    const swapValues = () => {
        const temp = source;
        setSource(destination);
        setDestination(temp);
    };

    // Function to reset the input fields
    const resetFields = () => {
        setSource("");
        setDestination("");
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
                                to={`/airport/${code}`}
                            >
                                {code} Airport Dropoff
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
                        <Link to={`/airport/${code}`} style={{ color: "black" }}>{code}</Link>
                        <span style={{ marginRight: '3px', marginLeft: '3px', color: "black" }}>{'>'}</span>
                        <p style={{ color: "black", paddingTop: "15px" }}>Pickup</p>
                    </div>
                </nav>
            </nav>

            <div className="container-lg text-center" style={{ border: "none", }}>

                <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="col" style={{ paddingTop: "25vh", paddingBottom: "25vh", textAlign: "left" }}>
                        <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "45px", paddingLeft: "20px", color: "black" }}>
                            Request a pickup from  {airportName}
                        </h1>
                        <h6 style={{ fontFamily: "Poppins, sans-serif", paddingLeft: "20px", fontWeight: "300", color: "black", marginTop: "10vh" }}>
                            Give us a few details, and we’ll find you a ride from the airport.
                        </h6>
                        <div className="container-fluid" style={{ paddingTop: "20px" }}>
                            <form>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5vh" }}>
                                    <button type='button' onClick={swapValues} style={buttonStyle}>
                                        <FaExchangeAlt/>
                                    </button>
                                    <button type="button" onClick={resetFields} style={buttonStyle}>
                                        <FaRedo />
                                    </button>
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        value={source}
                                        onChange={(e) => setSource(e.target.value)}
                                        placeholder="____"
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            marginTop: "5px",
                                        }}
                                    />
                                    <label htmlFor="source">Source</label>
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        placeholder="____"
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            marginTop: "5px",
                                        }}
                                    />
                                    <label htmlFor="destination">Destination</label>
                                </div>
                                <div>
                                    <button style={{ borderRadius: "8px", fontSize: "17px", padding: "13px", marginRight: "20px" }} type="submit">Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <img style={{ display: "block", width: "100%", height: "100%", transform: "scaleX(-1)", maxHeight: "100%" }} src={airportDropoff} alt='image1' />
                    </div>
                </div>
            </div>
            <div className="container-lg mt-5" style={{ color: "black" }}>
                <div className='row'>
                    <div className='col-8'>
                        <h2>Get picked up at {code} Airport</h2>
                        <p style={{ color: "gray", marginTop: "3%", marginLeft: "2%" }}>
                            Whether you’re new to or a local, Uber helps make it easy to get from ${code} to your final destination. Need a shuttle or transfer to your next leg? Uber has you covered. Avoid the taxi line and request a ride with a few simple steps.
                        </p>
                    </div>
                    <div className='col-4'></div>
                </div>

                <div>
                    <h3 style={{ marginTop: "10vh" }}>Your ride option from {code}</h3>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Popular</h5>
                            <Carousel>
                                <Carousel.Item style={{ marginBottom: "10vh" }}>
                                    <img
                                        className="d-block w-50"
                                        src={XPerson}
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
                                        className="d-block w-50"
                                        src={XPerson}
                                        alt="Premier"
                                    />
                                    <div >
                                        <h5>Sedan Intercity</h5>
                                        <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-4</p>
                                        <p>Outstation rides in comfortable sedans</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-6">
                            <h5>Economy</h5>
                            <Carousel>
                                <Carousel.Item style={{ marginBottom: "10vh" }}>
                                    <img className="d-block w-50" src={X} alt="SwiftCab Go" />
                                    <div >
                                        <h5>SwiftCab Go</h5>
                                        <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-4</p>
                                    </div>
                                    <p>Affordable, compact rides</p>
                                </Carousel.Item>
                                <Carousel.Item style={{ marginBottom: "10vh" }}>
                                    <img
                                        className="d-block w-50"
                                        src={twocar}
                                        alt="SwiftGo Go"
                                    />
                                    <div >
                                        <h5>Request any</h5>
                                        <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-4</p>
                                    </div>
                                    <p>Save time with the first available ride</p>
                                </Carousel.Item>
                                <Carousel.Item style={{ marginBottom: "10vh" }}>
                                    <img
                                        className="d-block w-50"
                                        src={carStar}
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
                                        className="d-block w-50"
                                        src={motoYellow}
                                        alt="SwiftCab Go"
                                    />

                                    <div >
                                        <h5>SwiftCab Moto</h5>
                                        <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1</p>
                                    </div>
                                    <p>Affordable, motorcycle rides</p>

                                </Carousel.Item>
                                <Carousel.Item style={{ marginBottom: "10vh" }}>
                                    <img
                                        className="d-block w-50"
                                        src={XlPackage}
                                        alt="SwiftCab Go"
                                    />

                                    <div >
                                        <h5>SwiftCab XL</h5>
                                        <p align="center" style={{ border: "none", backgroundColor: "black", borderRadius: "20px", color: "white", width: "60px", padding: "6px", alignItems: "center" }}>1-6</p>
                                    </div>
                                    <p>Comfortable SUVs</p>

                                </Carousel.Item>
                                <Carousel.Item style={{ marginBottom: "10vh" }}>
                                    <img
                                        className="d-block w-50"
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
            <div className="container-lg mt-5 mb-5" style={{ fontFamily: "Poppins,san-serif" }}>
                <h3 className="mb-4" style={{ color: 'black' }}>Top questions about {code} Airport pickup</h3>
                <div className="accordion" id="faqAccordion">
                    {faqItems.map((item, index) => (
                        <div className="accordion-item border-0" key={index}>
                            <h2 className="accordion-header" id={`heading-${index}`}>
                                <button
                                    className="accordion-button collapsed border-0 border-bottom"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-${index}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse-${index}`}
                                    style={{ borderBottom: '1px solid #ddd', borderRadius: 0 }}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse-${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading-${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {item.answer.replace(/Uber/g, 'SwiftCab')}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <Footer /></>
    );
};

export default FromAirport;
