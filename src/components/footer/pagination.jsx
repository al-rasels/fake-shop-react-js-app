import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-5">
      <button
        className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        Prev
      </button>
      <span className="px-4 py-2 mx-1">
        {currentPage} / {totalPages}
      </span>
      <button
        className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
