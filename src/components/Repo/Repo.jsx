import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import './repo.css';

const Repo = () => {
  const [repoDetails, setRepoDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const repoName = useParams();

  const dateCreated = new Date(repoDetails.created_at);
  const lastUpdated = new Date(repoDetails.updated_at);

  const formattedDateCreated = dateCreated.toDateString();
  const formattedLastUpdated = lastUpdated.toDateString();

  const fecthRepo = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/EmmanuelOloke/${repoName.repo}`);
      const fecthedRepoDetails = await response.json();

      if (response.status === 200) {
        setRepoDetails(fecthedRepoDetails);
        setIsLoading(false);
      } else {
        setNotFound(true);
        setIsLoading(false);
      }
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
        <LoadingSpinner />
      ) : notFound ? (
        <NotFound />
      ) : (
        <div className="repo-container">
          <div className="repo-details">
            <h1>{repoDetails.name}</h1>

            <div className="repo-details-body">
              <div className="repo-owner">
                <span className="bold">Owner: </span>
                {repoDetails.owner.login}
                <img className="owner-img" src={repoDetails.owner.avatar_url} alt="owner avatar" />
              </div>

              <div className="cap">
                <span className="bold">Default Branch: </span>
                {repoDetails.default_branch}
              </div>
              <div>
                <span className="bold">Date Created: </span>
                {formattedDateCreated}
              </div>
              <div>
                <span className="bold">Last Updated: </span>
                {formattedLastUpdated}
              </div>
              <div className="cap">
                <span className="bold">Visibility: </span>
                {repoDetails.visibility}
              </div>
            </div>

            <div className="btn-group">
              <a href={repoDetails.html_url} rel="noreferrer" target="_blank">
                <button className="btn">Visit Repo</button>
              </a>
              <Link to="/repos">
                <button className="btn">Back to Repo List</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Repo;
