import React from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Repos = ({ repos, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return repos.map((repo, index) => (
    <div className="repo-card" key={repo.id}>
      <div>{repo.name}</div>

      <Link className="link" to={`/repos/${repo.name}`} key={index}>
        <button href="#" className="btn">
          View More
        </button>
      </Link>
    </div>
  ));
};

export default Repos;
