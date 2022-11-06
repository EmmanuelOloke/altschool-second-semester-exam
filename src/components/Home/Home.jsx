import React from 'react';

import './home.css';

import Dev from '../../assets/github-dev.svg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img className="dev-icon" src={Dev} alt="dev icon" />

        <div>
          <div className="home-title">GitHub Repo List</div>
          <div className="text">
            Welcome to <span className="repos-link">Repo List</span>. A project to showcase my
            GitHub repositories by leveraging on the power and functionalities of{' '}
            <a
              className="repos-link"
              href="https://docs.github.com/en/rest"
              target="_blank"
              rel="noreferrer"
            >
              GitHub API
            </a>
            . Explore the{' '}
            <a className="repos-link" href="/repos">
              Repos
            </a>{' '}
            page and take some time to visit my{' '}
            <a
              className="repos-link"
              href="https://github.com/EmmanuelOloke"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile
            </a>{' '}
            and{' '}
            <a
              className="repos-link"
              href="https://emmanueloloke.dev"
              target="_blank"
              rel="noreferrer"
            >
              Personal Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
