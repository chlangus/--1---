import { useState, useEffect } from 'react';

function sliceArrayByLimit(array, limit) {
  const slicedArray = [];
  const totalItems = array.length;
  for (let i = 0; i < totalItems; i += limit) {
    slicedArray.push(array.slice(i, i + limit));
  }
  return slicedArray;
}

function Pagination({ cardsPerPage, totalCards, setPage, currentPage }) {
  const [pageGroups, setPageGroups] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  useEffect(() => {
    if (currentPage % 5 === 1) {
      setPageGroups(totalPageArray[Math.floor(currentPage / 5)]);
    } else if (currentPage % 5 === 0) {
      setPageGroups(totalPageArray[Math.floor(currentPage / 5) - 1]);
    }
  }, [currentPage, totalPageArray]);

  useEffect(() => {
    const pageArray = Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );
    const slicedPageArray = sliceArrayByLimit(pageArray, 5);
    setTotalPageArray(slicedPageArray);
    setPageGroups(slicedPageArray[0]);
  }, [totalPages]);

  const handlePageChange = newPage => {
    console.log('newpage:', newPage);
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
        <div>
          {pageGroups?.map(page => (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
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
