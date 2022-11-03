import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './repo.css';

const Repo = () => {
  const [repoDetails, setRepoDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const repoName = useParams();

  const fecthRepo = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/EmmanuelOloke/${repoName.repo}`);
      const fecthedRepoDetails = await response.json();

      setRepoDetails(fecthedRepoDetails);

      setIsLoading(false);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  useEffect(() => {
    fecthRepo();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="repo-container">
          <div className="repo-datails">
            <h1>{repoDetails.name}</h1>
            <Link to="/repos">
              <button className="btn">Back to Repos</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Repo;
