import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

import Broken from '../assets/broken.svg';

import './error-boundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-main">
          <div className="error-boundary-container">
            <img src={Broken} alt="broke app" />
            <div className="error-boundary-text">
              <h1>ErrorBoundary Test</h1>
              <h2 style={{ marginBottom: '3rem' }}>App Successfully Broken</h2>
              <a href="/" className="error-btn">
                Return Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
