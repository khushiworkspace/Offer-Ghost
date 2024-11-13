import React from 'react';
import '../css/NewPagination.css';

const NewPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);
    if (endPage - startPage < 2) {
      if (startPage === 1) {
        endPage = Math.min(3, totalPages);
      } else if (endPage === totalPages) {
        startPage = Math.max(totalPages - 2, 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-item ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
          style={{textAlign:'center',display:'flex'}}
        >
                    <span>
                    {i}
                    </span>
    
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <span className="pagination-info">Page {currentPage} of {totalPages}</span>
      <div className="pagination">
        <button
          className="pagination-nav"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &#8249;
        </button>
        {renderPageNumbers()}
  
        <button
          className="pagination-nav"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default NewPagination;
