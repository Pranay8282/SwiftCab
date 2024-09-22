import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import './Ride.css'
import { useState } from "react";
import CommunityGuidelines from './images/Community-Guidelines.svg'
import driverillumni from './images/driverillumni.webp'
import car from './images/car_front.svg'
import driverS from './images/driver.svg'
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
                        <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
                            <img src={driverillumni} alt="driver illustration" style={{ width: "100%", maxWidth: "400px" }} />
                        </div>
                        <div className="col-lg-6 col-md-12 text-lg-left" style={{ paddingLeft: "5vh" }}>
                            <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "3rem", fontWeight: "550" }}>
                                <ul className="list-unstyled">
                                    <li>Driver</li>
                                    <li>Requirement</li>
                                </ul>
                            </h1>
                            <h5 style={{ fontFamily: "Poppins, sans-serif", fontWeight: "550", color: "#5E5E5E" }}>
                                How to Drive with SwiftCab
                            </h5>
                            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300", marginTop: "20px" }}>Earn money by driving people around your city. Register now to receive more details about becoming a driver in your area.</p>
                            <div className="mt-4">
                                <button style={{ borderRadius: "8px", fontSize: "16px", padding: "10px 20px", backgroundColor: "black", color: "white", marginRight: "20px", border: "none" }}>
                                    <Link to="/driver-sign" style={{ color: "white", textDecoration: "none" }}>Get started with SwiftCab</Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container-lg mt-5 mb-5">
                    <h3 className="mb-4" style={{ color: 'black', fontWeight: "500", fontSize: "39px" }}>Three Earning Options</h3>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title"><img src={car} alt="calander" /></h5>
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}> Owner-Driver</p>
                                        <p className="card-text">An owner-driver operates a vehicle that they personally own. While requirements may differ by city, the basic criteria typically include:</p>
                                        <p className="card-text">
                                            <ul>
                                                <li>Driving License</li>
                                                <li>Vehicle Registration</li>
                                                <li>Vehicle Insurance</li>
                                                <li>Vehicle Permit</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <img className="card-title" src={driverS} alt="calander" />
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}>Driver with Partner</p>
                                        <p className="card-text">A driver with a partner operates a vehicle owned by someone else. The essential document for this role is:</p>
                                        <p className="card-text">
                                            <ul>
                                                <li>Driving License</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title"><img className="w-25" src={CommunityGuidelines} alt="calander" /></h5>
                                        <p className="card-text mt-4 mb-4" style={{ fontSize: "25px", fontWeight: "500" }}> Non-Driving Partner</p>
                                        <p className="card-text">A non-driving partner, or fleet owner, manages vehicles and drivers but does not drive on the SwiftCab platform themselves. To become a non-driving partner, you'll need:</p>
                                        <p className="card-text">
                                            <ul>
                                                <li>Driving License or Photo ID</li>
                                                <li>Vehicle Insurance</li>
                                                <li>Vehicle Registration</li>
                                                <li>Vehicle Permit</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg mt-5 mb-5">
                    <h4 style={{ color: '#5E5E5E' }}>Gear Up and Go</h4>
                    <h3 className="mb-4" style={{ color: 'black', fontWeight: "500", fontSize: "39px" }}>Getting Started is Simple</h3>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title">1. Register Online</h5>
                                        <p className="card-text">
                                            Provide your details and information about your vehicle if you have one. If not, we’ll assist you in acquiring one.
                                        </p>
                                        <Link style={link} onMouseEnter={() => { setHoveredLink("link") }} onMouseLeave={() => { setHoveredLink(null) }} to='/driver-sign'>Register Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title">2. Submit Required Documents</h5>
                                        <p className="card-text ">
                                            We’ll need copies of the necessary documents mentioned earlier. A commercial vehicle is also required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100" style={{ backgroundColor: "#FFF", border: "none" }}>
                                <div className="card-body d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title">3. Activate Your Account</h5>
                                        <p className="card-text">
                                            Bring your vehicle to a local Greenlight hub. Requirements may differ by city, so sign up to get more specific details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg mt-5 mb-5" style={{ fontFamily: "Poppins,san-serif" }}>
                    <h3 className="mb-4" style={{ color: 'black' }}>Frequently asked questions</h3>
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
            </div >
            <Footer /></>
    );
}
export default Requirement;