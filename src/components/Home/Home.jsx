import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => {
  return (
    <React.Fragment>
      <h1>This is the home page</h1>
      <Link to="/repos">View list of repos</Link>
    </React.Fragment>
  );
};

export default Home;
