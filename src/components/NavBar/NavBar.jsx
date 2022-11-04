import React from 'react';

import './navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div>
          <div className="nav-logo">Repo List</div>
        </div>

        <div className="nav-links">
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/repos">
            Repos
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
