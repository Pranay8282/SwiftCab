import Navbar from "./Navbar";
import Footer from "./Footer";
import {  Link } from "react-router-dom";
import './Ride.css'
import AirportLinks from "./Airport";
import airportPickUp  from './images/CabAirport (2).jpg'

const AirportRide = () => {
    const faqItems = [
        {
            question: 'How much will my airport ride cost?',
            answer: `The cost of your trip depends on several factors, including the type of ride you request, tolls, the length/duration of the trip, and current demand.

            To get a price estimate before you request, you can go here and fill in your pickup and dropoff details. When you request a ride, your actual price will be updated in the app based on real-time factors.`,
        },
        {
            question: 'What vehicles are available for airport trips?',
            answer: 'Available ride options depend on your location and airport regulations. The most accurate information can be found by going to SwiftCab.com/go and entering your pickup and dropoff points.',
        },
        {
            question: 'Will all of my luggage fit in the car?',
            answer: 'The luggage capacity depends on the vehicle model, number of passengers, and the ride option that you request. For example, an SwiftCabX ride can usually hold 2 suitcases while an SwiftCabXL ride can usually hold 3 suitcases. Once you’re matched with a driver, you can contact them through the app to confirm.',
        },
        {
            question: 'Can I reserve a ride with SwiftCab to and from the airport?',
            answer: 'Scheduled dropoffs are available at most airports. Pickups reserved in advance, however, are subject to airport regulations. You can find more information by choosing your airport in the list below.',
        },
        {
            question: 'At what point after I’ve landed should I request a ride?',
            answer: 'For requesting on demand, we recommend requesting a ride only after you’ve deplaned, passed through customs (if necessary), and collected your luggage (if any). Avoid wait-time fees by selecting the correct arrivals gate and following instructions in the app to meet your driver.',
        },
        {
            question: 'How long will my driver wait for me at the airport?',
            answer: 'When requesting with Uber Reserve, your driver will be informed of any schedule changes to your flight. For UberX, Uber Comfort, and UberXL rides, meet your driver up to 45 minutes after your flight’s arrival before late fees apply. For Uber Black, Uber Black SUV, Uber Premier, and Uber Premier SUV rides, meet your driver within 60 minutes',
        }
    ];
    return (
        <>
            <div className='homepage-container' style={{ backgroundColor: "white" }}>
                <Navbar />
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
                    <div className="d-flex" style={{ display: 'flex', alignItems: 'center', marginLeft: "10vh" }}>
                        <Link to="/" style={{ color: "black" }}>Home</Link>
                        <span style={{ marginLeft: '3px', marginRight: '3px', color: "black" }}>{'>'}</span>
                        <Link to="/ride" style={{ color: "black" }}>Ride</Link>
                        <span style={{ marginRight: '3px', marginLeft: '3px', color: "black" }}>{'>'}</span>
                        <p style={{ color: "black", paddingTop: "15px" }}>Airports</p>
                    </div>
                </nav>
                <div className="container-lg text-center" style={{ border: "none", }}>

                    <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap" }}>
                        <div className="col" style={{ paddingTop: "25vh", paddingBottom: "25vh", textAlign: "left" }}>
                            <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "45px", paddingLeft: "20px", color: "black" }}>Airport rides are better with SwiftCab</h1>
                            <h6 style={{ fontFamily: "Poppins, sans-serif", paddingLeft: "20px", fontWeight: "300", color: "black", marginTop: "10vh" }}>Request a ride to over all airports around the India. In most regions, you’ll also have the option to schedule an airport pickup or dropoff in advance.</h6>
                            <div className="container-fluid" style={{ paddingTop: "20px",backgroundColor:"white" }}>
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
                                        <button style={{ borderRadius: "8px", fontSize: "11px", padding: "13px", marginRight: "20px" }} type="submit">See prices</button>
                                        <button style={{ borderRadius: "8px", fontSize: "11px", padding: "13px", backgroundColor: "#F1F1F1", color: "black" }} type="submit" >Schedule for later</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col">
                            <img style={{ display: "block", width: "100%", height: "100%", transform: "scaleX(1)", maxHeight: "100%" }} src={airportPickUp} alt='image1' />
                        </div>
                    </div>
                </div>
                <div className="container-lg mt-5 mb-5">
                    <div className="row">
                        <div className="row mt-5 mb-5">
                            <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "32px", paddingLeft: "20px", color: "black" }}>Reserve your airport ride in advance</h1>
                            <h6 style={{ fontFamily: "Poppins, sans-serif", paddingLeft: "20px", fontWeight: "300", color: "black", marginTop: "3vh" }}>Take the stress out of getting to or from the airport by scheduling a ride up to 30 days ahead of time.</h6>
                            <div className="col mt-3">
                                <button style={{ borderRadius: "8px", fontSize: "11px", padding: "13px", marginRight: "20px" }} type="submit"><Link to="/driver-sign" style={{ color: "white", textDecoration: "none" }}>Request a ride today</Link></button>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ border: "none" }}>
                                <img style={{ transform: "scaleX(-1)" }} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_288,h_288/v1719582698/assets/51/c17bec-b3cc-4bfe-9d77-9f7d735c7bee/original/Hero02_GR_Ring%28SM%29_420x420.png" className="card-img-top" alt="Plan your ride" />
                                <div className="card-body">
                                    <h5 className="card-title">Plan your ride to the airport</h5>
                                    <p className="card-text">Priority matching through SwiftCab Reserve helps you get the ride you need when you need it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ border: "none" }}>
                                <img style={{ transform: "scaleX(-1)" }} src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_288,h_288/v1719582800/assets/53/0e23f0-10ce-45c1-9143-717e0480c52d/original/05_Premium-Pickup-At-Airport-Leg-2-or-4-of-Trip-_Email_1080x1080_Blue.svg" className="card-img-top" alt="Have a ride waiting" />
                                <div className="card-body">
                                    <h5 className="card-title">Have a ride waiting for you when you land</h5>
                                    <p className="card-text">Our flight-tracking technology will let your driver know if your flight is delayed (or early) so they can adjust their pickup time accordingly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ border: "none" }}>
                                <img style={{ transform: "scaleX(-1)" }} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_288,h_288/v1719582892/assets/58/63af3f-3069-4e21-8134-2780dd8efd08/original/Planning_RingS-M.png" className="card-img-top" alt="Book ahead" />
                                <div className="card-body">
                                    <h5 className="card-title">Book ahead of time with flexible cancellation</h5>
                                    <p className="card-text">Lock in your price when you reserve your ride. If your plans change, cancel for free up to one hour before your scheduled pickup time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg mt-5 mb-5" style={{ fontFamily: "Poppins,san-serif" }}>
                    <h3 className="mb-4" style={{ color: 'black' }}>Top questions about airport rides</h3>
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
            <div>
                <AirportLinks/>
            </div>
            <Footer /></>
    );
}
export default AirportRide;