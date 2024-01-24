import { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuestionFeedHeader from '../components/QuestionFeedHeader/QuestionFeedHeader';
import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';
import QuestionWriteButton from '../components/Buttons/QuestionWriteButton';
import fetchQuestion from '../services/FetchQuestion';
import timeSince from '../utils/TimeSince'; // 이 유틸리티 함수를 임포트해야 합니다.

export default function QuestionFeedPage() {
  const [subjectId, setSubjectId] = useState();
  const [questions, setQuestions] = useState([]);
  const [subjectData, setSubjectData] = useState({
    imageSource: '',
    name: '',
    questionCount: '',
  });

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
  }, [subjectId]);

  return (
    <Wrapper>
      <QuestionFeedHeader
        subjectId={subjectId}
        subjectData={subjectData}
        setSubjectData={setSubjectData}
      />
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
            />
          </FeedBox>
        ))}
      </FeedContainer>
      <QuestionWriteButton />
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
  flex-direction: column;
`;
