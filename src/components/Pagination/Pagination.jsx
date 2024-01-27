import { useState, useEffect } from 'react';
// import styled from 'styled-components';

// 페이지 단위 기준으로 배열 그룹화하는 함수
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
  const PAGE_BUNDLE = 5;

  // 페이지 단위로 그룹 업데이트 (1 ~ 5)->(6 ~ 10)
  useEffect(() => {
    if (currentPage % PAGE_BUNDLE === 1) {
      setPageGroups(totalPageArray[Math.floor(currentPage / PAGE_BUNDLE)]);
    } else if (currentPage % PAGE_BUNDLE === 0) {
      setPageGroups(totalPageArray[Math.floor(currentPage / PAGE_BUNDLE) - 1]);
    }
  }, [currentPage, totalPageArray]);

  // 각 페이지들에 숫자 부여, 배열 그룹화
  useEffect(() => {
    const pageArray = Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );
    const slicedPageArray = sliceArrayByLimit(pageArray, PAGE_BUNDLE);
    setTotalPageArray(slicedPageArray);
    setPageGroups(slicedPageArray[0]);
  }, [totalPages]);

  // 페이지 설정
  const handlePageChange = newPage => {
    console.log('newpage:', newPage);
    console.log('totalPages:', totalPages);
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      setPageGroups(
        totalPageArray.find(group => group.includes(newPage)) || [],
      );
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        처음
      </button>
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
      <button
        type="button"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        마지막
      </button>
    </div>
  );
}

export default Pagination;
