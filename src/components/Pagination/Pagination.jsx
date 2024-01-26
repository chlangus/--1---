import { useState, useEffect } from 'react';

function sliceArrayByLimit(array, limit) {
  const slicedArray = [];
  for (let i = 0; i < array.length; i += limit) {
    slicedArray.push(array.slice(i, i + limit));
  }
  return slicedArray;
}

function Pagination({ cardsPerPage, totalCards, setPage, currentPage }) {
  const [totalPages, setTotalPages] = useState(1);
  const [pageGroups, setPageGroups] = useState([]);

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(totalCards / cardsPerPage);
    setTotalPages(calculatedTotalPages);

    const pageArray = Array.from(
      { length: calculatedTotalPages },
      index => index + 1,
    );
    const groupedPages = sliceArrayByLimit(pageArray, 5);
    setPageGroups(groupedPages);
  }, [totalCards, cardsPerPage]);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div>
        {pageGroups.map(page => (
          <button
            key={page}
            type="button"
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
