import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import QuestionFeedHeader from '../components/QuestionFeedHeader/QuestionFeedHeader';
import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';
import QuestionWriteButton from '../components/Buttons/QuestionWriteButton';
import fetchQuestion from '../services/FetchQuestion';
import timeSince from '../utils/TimeSince';
import NoQuestionFeed from '../components/NoQuestionFeed';

export default function QuestionFeedPage() {
  const { id } = useParams();
  const [subjectId, setSubjectId] = useState(id);
  const [questions, setQuestions] = useState([]);
  const [subjectData, setSubjectData] = useState({
    imageSource: '',
    name: '',
    questionCount: '',
  });
  useEffect(() => {
    fetchQuestion(subjectId).then(data => {
      if (data.results.length) {
        // 데이터 있으면 실행
        const transformedQuestions = data.results.map(question => ({
          ...question,
          createdWhen: timeSince(question.createdAt),
          isAnswered: question.answer !== null,
          answer: question.answer
            ? {
                ...question.answer,
                createdWhen: timeSince(question.answer.createdAt),
              }
            : null,
        }));
        setQuestions(transformedQuestions);
      } else {
        setQuestions([]);
      }
    });
  }, []);
  return (
    <Wrapper>
      <QuestionFeedHeader
        subjectId={subjectId}
        subjectData={subjectData}
        setSubjectData={setSubjectData}
      />
      {questions.length === 0 ? (
        <NoQuestionFeed />
      ) : (
        <FeedContainer>
          <FeedBox subjectData={subjectData}>
            {questions.map(questionItem => (
              <FeedCard
                key={questionItem.id}
                question={questionItem}
                subjectId={subjectId}
                subjectData={subjectData}
                setSubjectId={setSubjectId}
              />
            ))}
          </FeedBox>
        </FeedContainer>
      )}
      <QuestionWriteButton
        subjectId={subjectId}
        handleQuestion={setQuestions}
      />
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
