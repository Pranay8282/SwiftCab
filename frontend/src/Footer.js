import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        {/* <div className="row" style={{alignContent:'center'}}>
          <div className="col-md-3 mb-4">
            <h4>SwiftCab</h4>
            <a href="#" className="text-white text-decoration-none">Visit Help Center</a>
          </div>
          
        </div> */}

        {/* Social Media Icons */}
        <div className="row text-center mb-4">
          <div className="col">
            <a
              href="https://github.com/Pranay8282  "
              className="text-white mx-2"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pranay-patel-042065262/"
              className="text-white mx-2"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/_pranay_0811/" className="text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        

        {/* Language and Location Links */}
        <div className="row text-center mb-4">
          <div className="col">
            <a href="#" className="text-white text-decoration-none mx-3">
              <i className="fas fa-globe"></i> English
            </a>
            <a href="#" className="text-white text-decoration-none mx-3">
              <i className="fas fa-map-marker-alt"></i> Ahmedabad
            </a>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="row text-center">
          <div className="col">
            <p className="mb-1">© 2024 SwiftCab Technologies.</p>
            <a href="#" className="text-white text-decoration-none mx-2">
              Privacy
            </a>
            <a href="#" className="text-white text-decoration-none mx-2">
              Accessibility
            </a>
            <a href="#" className="text-white text-decoration-none mx-2">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
