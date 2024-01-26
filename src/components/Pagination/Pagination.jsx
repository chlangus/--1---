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
  const [totalPages, setTotalPages] = useState(1);
  const [pageGroups, setPageGroups] = useState([]);

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(totalCards / cardsPerPage);
    console.log('calculatedTotalPages:', calculatedTotalPages);
    setTotalPages(calculatedTotalPages);

    if (calculatedTotalPages > 1) {
      const pageArray = Array.from(
        { length: calculatedTotalPages },
        (_, index) => index + 1,
      );
      console.log('pageArray:', pageArray);
      const groupedPages = sliceArrayByLimit(pageArray, 5);
      setPageGroups(groupedPages);
    } else {
      setPageGroups([]);
    }
  }, [totalCards, cardsPerPage]);

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
        {pageGroups.map(group => (
          <div key={group} style={{ display: 'flex' }}>
            {group.map(page => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
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
