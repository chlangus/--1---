import { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuestionFeedHeader from '../components/QuestionFeedHeader/QuestionFeedHeader';
import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';
import DeleteAllButton from '../components/Buttons/DeleteAllButton';
import fetchQuestion from '../services/FetchQuestion';
import timeSince from '../utils/TimeSince';
import NoQuestionFeedPage from '../components/NoQuestionFeedPage';

export default function AnswerPage() {
  const [subjectId, setSubjectId] = useState();
  const [questions, setQuestions] = useState([]);
  const [subjectData, setSubjectData] = useState({
    imageSource: '',
    name: '',
    questionCount: '',
  });
  const [isRejected, setIsRejected] = useState(false);

  useEffect(() => {
    fetchQuestion(subjectId).then(data => {
      if (data.results?.length) {
        const transformedQuestions = data.results.map(question => ({
          ...question,
          createdAt: timeSince(question.createdAt),
          isAnswered: question.answer !== null,
          answer: question.answer
            ? {
                ...question.answer,
                createdAt: timeSince(question.answer.createdAt),
              }
            : null,
        }));
        setQuestions(transformedQuestions);
      } else {
        setQuestions([]);
      }
    });
  }, [subjectId, isRejected]);

  if (questions.length === 0) {
    return <NoQuestionFeedPage />;
  }

  return (
    <Wrapper>
      <QuestionFeedHeader
        subjectId={subjectId}
        subjectData={subjectData}
        setSubjectData={setSubjectData}
      />
      <S.DeleteAndFeed>
        <DeleteAllButton text="삭제하기" />
        <FeedContainer>
          {questions.map((questionItem, index) => (
            <FeedBox
              key={questionItem.id}
              subjectData={subjectData}
              isFirstBox={index === 0}
            >
              <FeedCard
                question={questionItem}
                subjectId={subjectId}
                subjectData={subjectData}
                setSubjectId={setSubjectId}
                isAnswerPage
                setIsRejected={setIsRejected}
              />
            </FeedBox>
          ))}
        </FeedContainer>
      </S.DeleteAndFeed>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colorGrayScale20};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.4rem;
`;

const FeedContainer = styled.div`
  display: flex;
  width: 327px;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colorBrown30};
  background: ${({ theme }) => theme.colorBrown10};

  @media (min-width: 768px) {
    width: 704px;
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
