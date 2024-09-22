import React, { useState } from 'react';
import './LoginDropdown.css'; // For styling, if needed

const LoginDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="App">
      <button className="login-button" onClick={toggleDropdown}>
        Log in
      </button>

      {dropdownOpen && (
        <div className="dropdown">
          <button className="close-button" onClick={closeDropdown}>
            ×
          </button>
          <ul className="dropdown-links">
            <li>
              <a href="#drive-deliver">Sign in to drive & deliver</a>
            </li>
            <li>
              <a href="#ride">Sign in to ride</a>
            </li>
            <li>
              <a href="#uber-eats">Sign in to order delivery with Uber Eats</a>
            </li>
            <li>
              <a href="#business">Sign in to your Uber for Business account</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
