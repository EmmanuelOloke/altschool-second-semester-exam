import React from 'react';
import { Link } from 'react-router-dom';

import './not-found.css';

import Void from '../../assets/void.svg';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="not-found-details">
        <div className="not-found-title">Page Not Found</div>
        <img className="not-found-image" src={Void} alt="Error 404" />
        <Link to="/">
          <button className="home-btn">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
