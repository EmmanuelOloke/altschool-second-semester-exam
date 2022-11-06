import React from 'react';

import { useState } from 'react';

import './navbar.css';

const NavBar = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw Error('Testing the Error Boundary');
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="/" style={{ textDecoration: 'none' }}>
          <div className="nav-logo">Repo List</div>
        </a>

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
          <button className="nav-link" onClick={() => setError(true)}>
            Error
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
