import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './repo-list.css';

const RepoList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/EmmanuelOloke/repos');
      const fetchedRepos = await response.json();

      setRepos(fetchedRepos);
      setIsLoading(false);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const eachRepo = repos.map((repo, index) => {
    return (
      <div className="repo-card" key={repo.id}>
        <div>{repo.name}</div>

        <Link className="link" to={`/repos/${repo.name}`} key={index}>
          <button href="#" className="btn">
            View More
          </button>
        </Link>
      </div>
    );
  });

  return (
    <React.Fragment>
      <h1>GitHub Repo List</h1>

      {isLoading ? <h1>Loading...</h1> : <div className="each-repo">{eachRepo}</div>}
    </React.Fragment>
  );
};

export default RepoList;
