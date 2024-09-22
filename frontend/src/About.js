import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (

        <div className="about-container">
            <Navbar/>
            <header className="about-header">
                <h1>About Us</h1>
                <p>Learn more about who we are and what we do</p>
            </header>

            <section className="about-introduction">
                <h2>Our Mission</h2>
                <p>
                    We are dedicated to creating innovative solutions that make a difference. Our mission is to leverage technology and creativity to solve real-world problems and make the world a better place.
                </p>
            </section>

            

            <section className="about-contact">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to get in touch, feel free to reach out to us at:</p>
                <ul>
                    <li>Email: <a href="https://sites.google.com/view/pranaypatel1212/home?authuser=0">pranaypatel9696@gmail.com</a></li>
                    <li>Phone: +91 9712812014</li>
                    <li>Address: 1234 Innovation Drive, Tech City, TX 56789</li>
                </ul>
            </section>

            <footer className="about-footer">
                <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
            </footer>
            <Footer/>
        </div>
    );
};

export default About;
