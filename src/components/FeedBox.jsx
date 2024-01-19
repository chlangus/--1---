import styled from 'styled-components';
import FeedCard from './FeedCard';
import messageIcon from '../assets/message-icon.svg';

export default function FeedBox() {
  return (
    <S.Container>
      <S.QuestionCount>
        <img src={messageIcon} alt="message-icon" />
        <div>3개의 질문이 있습니다</div>
      </S.QuestionCount>
      <FeedCard />
    </S.Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1.6rem;
  border: 1px solid var(--color-brown-30);
  background: var(--color-brown-10);
`;

const QuestionCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

// const FeedCard = styled.div`
//   display: flex;
//   padding: 3.2rem;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 3.2rem;
//   align-self: stretch;
// `;

// 스타일
const S = {
  Container,
  QuestionCount,
};
