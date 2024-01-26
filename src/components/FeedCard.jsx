import styled from 'styled-components';
import QuestionAnswerCard from './QuestionAnswerCard';

export default function FeedCard({
  question,
  subjectData,
  isAnswerPage,
  isRejected,
  setIsRejected,
}) {
  return (
    <S.Container>
      <QuestionAnswerCard
        question={question}
        subjectData={subjectData}
        isAnswerPage={isAnswerPage}
        isRejected={isRejected}
        setIsRejected={setIsRejected}
      />
    </S.Container>
  );
}

const Container = styled.div`
  display: flex;
  // width: 684px;
  width: 100%;

  flex-direction: column;
  align-items: flex-start;
  padding: 2.4rem;
  gap: 2.4rem;

  border-radius: 1.6rem;
  background: ${({ theme }) => theme.colorGrayScale10};

  box-shadow: var(--shadow-1pt);

  @media (min-width: 768px) {
    padding: 3.2rem;
    gap: 3.2rem;
  }
`;

// 스타일
const S = {
  Container,
};
