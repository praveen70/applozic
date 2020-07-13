import React from "react";
import './pagination.scss'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <React.Fragment>
      <div className="pagination">
        {pageNumbers.map((number, index) => {
          return (
            <span key={index}>
              <a 
                onClick={() => paginate(number)}
               
                className="page-link"
              >
                {number}
              </a>
            </span>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Pagination;
