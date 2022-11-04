import React from 'react';

import './pagination.css';

const Pagination = ({ reposPerPage, totalRepos, currentPage, setCurrentPage, isLoading }) => {
  const pageNumbers = [];
  const numberOfPages = Math.ceil(totalRepos / reposPerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="pagination-main">
      <div className="pagination-header">
        Page: {currentPage} of {numberOfPages}
      </div>
      <div className="pagination-container">
        <div className="pagination-items">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage <= 1}
            className="next-prev"
          >
            PREV
          </button>
          {pageNumbers.map((number) => (
            <button key={number} className="pagination-item" onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage >= numberOfPages}
            className="next-prev"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
