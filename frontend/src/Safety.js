import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import './Ride.css'
import { useState } from "react";
import './Safety.css'
import CommunityGuidelines from './images/Community-Guidelines.svg'
import car from './images/car_front.svg'
import driverS from './images/driver.svg'
import driverSafety from './images/driverSafety.webp'
import support from './images/24_7-Support.svg'
import twoWayRating from './images/2-Way-Ratings.svg'
import shareMytrip from './images/Share-My-Trip.svg'
import phone from './images/Phone-Anonymization.svg'
import gps from './images/GPS-Tracking.svg'
import driverGo from './images/driverCab.webp'

const Requirement = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const linkStyle1 = {
        color: hoveredLink === 'link1' ? 'gray' : 'black', // Example hover 
        fontSize: "14px"
    };

    const linkStyle2 = {
        color: hoveredLink === 'link2' ? 'gray' : 'black',
        fontSize: "14px"
    };

    const linkStyle3 = {
        color: hoveredLink === 'link3' ? 'gray' : 'black',
        fontSize: "14px"
    };
    const linkStyle4 = {
        color: hoveredLink === 'link4' ? 'gray' : 'black',
        fontSize: "14px"
    };
    const link = {
        color: "black",
        fontSize: "14px",
        textDecoration: hoveredLink === 'link' ? 'underline' : 'none'
    }
    const account = {
        color: hoveredLink === 'account' ? '#f1f1f1' : 'white',
        textDecoration: hoveredLink === 'account' ? 'underline' : 'none',
        fontWeight: "300",
        fontFamily: "Poppins, sans-serif",
    }
    const faqItems = [
        {
            question: 'What are the requirements to become a SwiftCab driver?',
            answer: `Requirements vary depending on the earning option you choose. Generally, you'll need a valid driver's license, vehicle registration, and insurance.`,
        },
        {
            question: 'Do I need any experience to drive for SwiftCab?',
            answer: 'No prior experience is necessary.',
        },
        {
            question: 'What documents do I need to submit?',
            answer: 'The specific documents required will depend on your earning option. You can find more information on the SwiftCab website or by contacting their support team',
        },
    ];
    return (
        <>
            <div className='homepage-container' style={{ backgroundColor: "white" }}>
                <Navbar />
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
                    <div className="container-fluid">
                        {/* Left-aligned link */}
                        <Link style={{ fontSize: "25px", fontWeight: "500" }} className="navbar-brand ms-lg-5" to="/Driver" id="rideLink">
                            Driver
                        </Link>

                        {/* Right-aligned link */}
                        <div className="d-flex pl-5" id="airportLink">
                            <div>
                                <Link
                                    style={linkStyle1}
                                    className="navbar-brand"
                                    name="1"
                                    onMouseEnter={() => setHoveredLink('link1')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    to="/Driver"
                                >
                                    Overview
                                </Link>
                            </div>
                            <div>
                                <Link
                                    style={linkStyle2}
                                    className="navbar-brand"
                                    name="1"
                                    onMouseEnter={() => setHoveredLink('link2')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    to="/requirement"
                                >
                                    Requirement
                                </Link>
                            </div>
                            <div>
                                <Link
                                    style={linkStyle3}
                                    className="navbar-brand"
                                    name="1"
                                    onMouseEnter={() => setHoveredLink('link3')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    to="/safety"
                                >
                                    Safety
                                </Link>
                            </div>
                            <div>
                                <Link
                                    style={linkStyle4}
                                    className="navbar-brand"
                                    name="1"
                                    onMouseEnter={() => setHoveredLink('link4')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    to="/Contact-us"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid" style={{ backgroundColor: 'white', color: 'black', padding: '50px 0' }}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-12 text-lg-left" style={{ paddingLeft: "20vh" }}>
                            <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "3rem", fontWeight: "550" }}>
                                <ul className="list-unstyled">
                                    <li>Drive with</li>
                                    <li>unwavering confidence</li>
                                </ul>
                            </h1>
                            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300", marginTop: "20px" }}>You deserve the freedom to pursue every opportunity. Reach your destination with the backing of reliable support on the road and advanced technology that safeguards you and others.</p>
                            <div className="mt-4">
                                <button style={{ borderRadius: "8px", fontSize: "16px", padding: "10px 20px", backgroundColor: "black", color: "white", marginRight: "20px", border: "none" }}>
                                    <Link to="/driver-sign" style={{ color: "white", textDecoration: "none" }}>Sign up to Drive</Link>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
                            <img className="zoom-sensitive-image" src={driverSafety} alt="driver illustration" style={{ width: "100%", maxWidth: "400px", minWidth: "250px" }} />
                        </div>
                    </div>
                </div>
                <div className="container-lg mt-5 mb-5">
                    <h3 className="mb-4" style={{ color: 'black', fontWeight: "500", fontSize: "39px" }}>Planning a Safer Experience</h3>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title">Safety Features Designed for You</h5>
                                        <p className="card-text">
                                            Our app incorporates advanced technology to keep you in touch with your loved ones and our support team, ensuring you can venture out with added confidence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title"> Support When You Need It</h5>
                                        <p className="card-text ">
                                            Access our specially trained incident response teams directly through the app, available around the clock to assist you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title">Fostering an Inclusive Community</h5>
                                        <p className="card-text">
                                            By collaborating with cities and safety experts, we’re committed to enhancing safety and ensuring secure journeys for everyone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg mt-5 mb-5">
                    <h3 className="mb-4" style={{ color: 'black', fontWeight: "500", fontSize: "39px" }}>Your Safety is Our Priority</h3>
                    <h5 style={{ color: '#5E5E5E' }}>Safety is designed into the experience. So you feel comfortable driving at night. So you can tell loved ones where you’re going. And so you know you have someone to turn to if anything happens.*</h5>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title w-25"><img src={support} alt="calander" /></h5>
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}>Round-the-Clock Incident Assistance</p>
                                        <p className="card-text">Our customer support team, trained in incident response, is available 24/7 to help you whenever you need it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <img className="card-title w-25" src={shareMytrip} alt="calander" />
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}>Real-Time Trip Tracking</p>
                                        <p className="card-text">Share your route with friends and family so they can follow your journey and know when you arrive safely.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title"><img className="w-25" src={twoWayRating} alt="calander" /></h5>
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}> Mutual Ratings</p>
                                        <p className="card-text">Your feedback is crucial. Trips with low ratings are reviewed, and users who don’t meet community standards may be removed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title"><img className="w-25" src={phone} alt="calander" /></h5>
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}> Private Phone Numbers</p>
                                        <p className="card-text">When contacting your rider through the app, your phone number remains confidential.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title"><img className="w-25" src={gps} alt="calander" /></h5>
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}> Complete Trip Tracking</p>
                                        <p className="card-text">All trips are tracked from start to finish, providing a detailed record of your journey in case of any issues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-6 mt-5 mb-4">
                            <h1 className="text-left" style={{ color: "black", fontSize: "47px" }}>Safer roads for everyone, thanks to you</h1>
                            <h5 className="mt-5 mb-5" style={{ color: "#5E5E5E", fontWeight: "400" }}>You have an essential role in creating safer urban environments and more navigable roadways.</h5>
                        </div>
                        <div className="col-md-6 mb-4">
                            <img className="zoom-sensitive-image" src={driverGo} alt="driver illustration" style={{ width: "100%", maxWidth: "400px", minWidth: "250px" }} />
                        </div>
                    </div>
                </div>
                <div className="container-lg mt-5 mb-5">
                    <div className="row mt-5">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <img className="card-title" src="https://d1a3f4spazzrp4.cloudfront.net/chameleon-assets/v1.0.0/d5236cac-f675-492c-9382-1d7599ee45c1/i.svg" alt="calander" />
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}>Staying focused while driving</p>
                                        <p className="card-text">The app reminds you that you’re driving within the posted speed limit, so you’re alert behind the wheel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <img className="card-title" src="https://d1a3f4spazzrp4.cloudfront.net/chameleon-assets/v1.0.0/c6a3fb08-a856-4f2e-b81d-86029e83fd57/i.svg" alt="calander" />
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}>Safety tips</p>
                                        <p className="card-text">From finding a safe place to pick up riders to reminding them to buckle up, you can make a big difference in your safety and that of the people around you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-lg mt-5 mb-5" >
                <p style={{color:"#5E5E5E"}}>Availability and specific features may differ based on your location.</p>
                <p style={{color:"#5E5E5E"}}>Please note that the services and options provided may vary depending on geographical location.</p>
            </div>
            <Footer /></>
    );
}
export default Requirement;