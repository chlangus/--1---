import { useState, useEffect } from 'react';
import styled from 'styled-components';

// 페이지 단위 기준으로 배열 그룹화하는 함수
function sliceArrayByLimit(array, limit) {
  const slicedArray = [];
  const totalItems = array.length;
  for (let i = 0; i < totalItems; i += limit) {
    slicedArray.push(array.slice(i, i + limit));
  }
  return slicedArray;
}

export default function Pagination({
  cardsPerPage,
  totalCards,
  setPage,
  currentPage,
}) {
  const [pageGroups, setPageGroups] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const PAGE_BUNDLE = 5;
  const FIRST_PAGE = 1;

  // 페이지 단위로 그룹 업데이트 (1 ~ 5)->(6 ~ 10)
  useEffect(() => {
    if (currentPage % PAGE_BUNDLE === 1) {
      setPageGroups(totalPageArray[Math.floor(currentPage / PAGE_BUNDLE)]);
    } else if (currentPage % PAGE_BUNDLE === 0) {
      setPageGroups(totalPageArray[Math.floor(currentPage / PAGE_BUNDLE) - 1]);
    }
  }, [currentPage, totalPageArray]);

  // 각 페이지들에 숫자 부여, 배열 그룹화
  const pageArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  const slicedPageArray = sliceArrayByLimit(pageArray, PAGE_BUNDLE);
  useEffect(() => {
    setTotalPageArray(slicedPageArray);
    setPageGroups(slicedPageArray[0]);
  }, [totalPages]);

  // 페이지 설정
  const handlePageChange = newPage => {
    console.log('newpage:', newPage);
    console.log('totalPages:', totalPages);
    console.log('current:', currentPage);
    if (newPage >= FIRST_PAGE && newPage <= totalPages) {
      setPage(newPage);
      setPageGroups(
        totalPageArray.find(group => group.includes(newPage)) || [],
      );
    }
  };
  return (
    <PageButtonWrap>
      {currentPage > FIRST_PAGE && currentPage !== 2 && (
        <PageButton type="button" onClick={() => handlePageChange(FIRST_PAGE)}>
          {'<<'}
        </PageButton>
      )}
      {currentPage > FIRST_PAGE && (
        <PageButton
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </PageButton>
      )}

      {pageGroups?.map(page => (
        <PageButton
          key={page}
          type="button"
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </PageButton>
      ))}
      {currentPage < totalPages && (
        <PageButton
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </PageButton>
      )}
      {currentPage < totalPages && currentPage !== totalPages - 1 && (
        <PageButton type="button" onClick={() => handlePageChange(totalPages)}>
          {'>>'}
        </PageButton>
      )}
    </PageButtonWrap>
  );
}
const PageButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 4rem;
  gap: 1.8rem;
`;

const PageButton = styled.button`
  color: ${({ theme }) => theme.colorGrayScale60};
  font-size: 2rem;
  border: none;
  cursor: pointer;
  background-color: inherit;

  &:hover {
    color: ${({ theme }) => theme.colorBlue50};
  }

  &.active {
    color: ${({ theme }) => theme.colorRed50}; /* 클릭된 버튼 색 */
  }
`;
