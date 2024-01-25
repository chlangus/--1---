import { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import useMobileLayout from '../utils/useMobileLayout';
import useTabletLayout from '../utils/useTabletLayout';
import DropDownButton from './Buttons/DropDownButton';

export default function QuestionList() {
  const [sort, setSort] = useState('time');
  const [cardList, setCardList] = useState([]);
  const [orderList, setOrderList] = useState('최신순');
  const orderType = ['이름순', '최신순'];
  const sortedCardList = cardList.sort((a, b) => b[sort] - a[sort]);
  const MIN_CARDS = 6;
  const MAX_CARDS = 8;

  const isMobileSize = useMobileLayout();
  const isTabletSize = useTabletLayout();
  const LIMITSIZE = isMobileSize || isTabletSize ? MIN_CARDS : MAX_CARDS;

  const getCardList = async ({ sort: cardSort, LIMITSIZE: cardLimitSize }) => {
    const url = `/subjects/?limit=${cardLimitSize}&offset=0&sort=${cardSort}`;
    const response = await fetch(`https://openmind-api.vercel.app/3-2${url}`);
    const result = await response.json();
    return result;
  };

  const handleLoad = async () => {
    const { results } = await getCardList({ sort, LIMITSIZE });
    setCardList(results);
  };

  useEffect(() => {
    handleLoad({ sort, LIMITSIZE });
  }, [sort, LIMITSIZE]);

  const handleOrderClick = e => {
    const { textContent } = e.target;
    if (e.target === '이름순') {
      setSort('name');
      setOrderList(textContent);
    }
    if (e.target === '최신순') {
      setSort('time');
      setOrderList(textContent);
    }
  };

  return (
    <StyledBox>
      <StyledDiv>
        <Header>
          <ListTitle>누구에게 질문할까요?</ListTitle>
          <ButtonDiv>
            <DropDownButton
              orderType={orderType}
              orderList={orderList}
              handleButtonClick={handleOrderClick}
            />
          </ButtonDiv>
        </Header>
        <StyledList>
          {sortedCardList?.map(data => (
            <QuestionCard
              id={data.id}
              key={data.id}
              name={data.name}
              imageSource={data.imageSource}
              questionCount={data.questionCount}
            />
          ))}
        </StyledList>
      </StyledDiv>
    </StyledBox>
  );
}
const StyledBox = styled.div`
  width: 100%;
`;
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 120rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  @media screen and ((min-width: 375px)
  and (max-width: 767px)) {
    max-width: 50rem;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.8rem;
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and ((min-width: 375px)
  and (max-width: 767px)) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.8rem;
    width: 100%;
  }
`;
const ListTitle = styled.h1`
  color: ${({ theme }) => theme.colorGrayScale60};
  text-align: center;
  font-size: var(--font-h1);
  font-weight: var(--weight-regular);
  line-height: normal;
  margin=bottom: 1.2rem;

  @media screen and ((min-width: 375px)
  and (max-width: 767px)) {
    display: flex;
    font-size: var(--font-h3);
    margin-bottom: 0;
  }
`;

const ButtonDiv = styled.div`
  margin-bottom: 3rem;
  position: relative;
  cursor: pointer;

  @media screen and ((min-width: 375px)
  and (max-width: 767px)) {
    margin-bottom: 0;
  }
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22rem);
  grid-template-rows: repeat(2, 18.7rem);
  gap: 2rem;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding-bottom: 6.1rem;
    grid-template-columns: repeat(3, 22rem);
  }

  @media (max-width: 375px) {
    padding: 0 2.4rem 3.1rem;
    grid-template-columns: repeat(2, 15rem);
    grid-template-rows: repeat(3, 16.8rem);
  }
`;
