// import { useState } from 'react';
import styled from 'styled-components';
import QuestionFeedHeader from '../components/QuestionFeedHeader/QuestionFeedHeader';
import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';
import DeleteAllButton from '../components/Buttons/DeleteAllButton';

export default function AnswerPage() {
  // const [feedList, setFeedList] = useState([]);
  return (
    <S.Wrapper>
      <QuestionFeedHeader />
      <S.DeleteAndFeed>
        <DeleteAllButton text="삭제하기" />
        <FeedBox>
          {/* {feedList.map(item => (
            <FeedCard key={item.id} isAnswerPage />
          ))} */}
          <FeedCard isAnswerPage />
        </FeedBox>
      </S.DeleteAndFeed>
    </S.Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--color-grayscale-20);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;
const DeleteAndFeed = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;
// 스타일
const S = {
  Wrapper,
  DeleteAndFeed,
};
