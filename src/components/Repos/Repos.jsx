import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Repos = ({ repos, isLoading }) => {

  // repos array contains all info about each repo
  // map over the repos array to get a new repoState extracting only relevant details into new Objects
  // use the new repoState, map over it and use that to return the main UI.

  const [repoState, setRepoState] = useState([])

  const getLangFromRepoURL = async (url) => {
    const response = await fetch(url);
    const langOBJ = await response.json();
    return langOBJ;
  }


  useEffect(() => {
    const getLanguages = async () => {
      const relevantDetails = await Promise.all(repos.map(async repo => {
        const languages = await getLangFromRepoURL(repo.languages_url)
        return {
          id: repo.id, languages, name: repo.name,
        }
    }))
      setRepoState(relevantDetails);
  }
    getLanguages()
  }, [repos])
  
  console.log(repoState);


  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (repoState.map((repoState, index) => (
    <div className="repo-card" key={repoState.id}>
      <div>{repoState.name.toUpperCase()}</div>
      <div style={{fontSize: '0.9rem'}}>{(Object.keys(repoState.languages).length > 0 ? 'Languages: ' + Object.keys(repoState.languages).join(', ') : 'No Languages')}</div>
      <Link className="link" to={`/repos/${repoState.name}`} key={index}>
        <button href="#" className="btn">
          View More
        </button>
      </Link>
    </div>
  )));
};

export default Repos;
