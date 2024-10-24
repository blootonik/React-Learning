import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact-us" className="nav-link" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
