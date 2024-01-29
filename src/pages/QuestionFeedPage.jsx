import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import QuestionFeedHeader from '../components/Feed/QuestionFeedHeader';
import FeedBox from '../components/Feed/FeedBox';
import FeedCard from '../components/Feed/FeedCard';
import QuestionWriteButton from '../components/Buttons/QuestionWriteButton';
import fetchQuestion from '../services/fetchQuestion';
import timeSince from '../utils/timeSince';
import NoQuestionFeed from '../components/Feed/NoQuestionFeed';
import useSubjectData from '../hooks/useSubjectData';

export default function QuestionFeedPage() {
  const { id } = useParams();
  const [subjectId, setSubjectId] = useState(id);
  const [questions, setQuestions] = useState([]);

  const [subjectData, setSubjectData] = useSubjectData();

  console.log(subjectData);

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
  }, [setSubjectData]);
  return (
    <Wrapper>
      <QuestionFeedHeader subjectId={subjectId} />
      {questions.length === 0 ? (
        <NoQuestionFeed />
      ) : (
        <FeedContainer>
          <FeedBox>
            {questions.map(questionItem => (
              <FeedCard
                key={questionItem.id}
                question={questionItem}
                subjectId={subjectId}
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
