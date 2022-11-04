import React from 'react';

import './about.css';

import VersionControl from '../../assets/version-ctrl.svg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img className="version-control" src={VersionControl} alt="version control" />

        <div>
          <div className="about-title">About</div>
          <div className="about-text">
            <span className="about-links">Repo List</span> was built by{' '}
            <a
              className="about-links"
              rel="noreferrer"
              target="_blank"
              href="https://emmanueloloke.dev"
            >
              Emmanuel Oloke
            </a>{' '}
            with the help of the{' '}
            <a
              className="about-links"
              rel="noreferrer"
              target="_blank"
              href="https://docs.github.com/en/rest"
            >
              GitHub API
            </a>{' '}
            for{' '}
            <a
              className="about-links"
              rel="noreferrer"
              target="_blank"
              href="https://altschoolafrica.com"
            >
              AltSchool Africa
            </a>{' '}
            Second Semester Examination.
            <div>
              Feel free to reach out and connect on{' '}
              <a
                className="about-links"
                rel="noreferrer"
                target="_blank"
                href="https://linkedin.com/in/emmanuel-oloke"
              >
                LinkedIn
              </a>{' '}
              or{' '}
              <a
                className="about-links"
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/I_am_Pope"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
