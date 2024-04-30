// Navbar.js
import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


    const Navbar = () => {
      const [dropdownVisible, setDropdownVisible] = useState(false);

      const toggleDropdown = () => {
          setDropdownVisible(!dropdownVisible);
      };

      return (
          <nav className="navbar">
              <div className="navbar-brand">
                  <span id="nav-title">The best players of the 21st century</span>
              </div>
              <div className="navbar-toggle">
                  <span>@Salah</span>
                  <img className="img-nav" src={require('../images/Salah.jpeg')} alt="User" onClick={toggleDropdown} />
                  <div className={dropdownVisible ? 'dropdown-menu show' : 'dropdown-menu'}>
                  <Link to="/profile">
                    <FontAwesomeIcon icon={faUser} />
                    Profile
                  </Link>
                  <Link to="/settings">
                    <FontAwesomeIcon icon={faCog} /> 
                    Settings
                  </Link>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faSignOutAlt} /> 
                    Logout
                  </Link>
                  </div>
              </div>
          </nav>
      );
    };

    export default Navbar;
