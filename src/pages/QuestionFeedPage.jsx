import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import QuestionFeedHeader from '../components/QuestionFeedHeader/QuestionFeedHeader';
import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';
import QuestionWriteButton from '../components/Buttons/QuestionWriteButton';
import fetchQuestion from '../services/FetchQuestion';
import timeSince from '../utils/TimeSince';
import NoQuestionFeedPage from '../components/NoQuestionFeedPage';

export default function QuestionFeedPage() {
  const [subjectId, setSubjectId] = useState();
  const [questions, setQuestions] = useState([]);
  const [subjectData, setSubjectData] = useState({
    imageSource: '',
    name: '',
    questionCount: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView();

  const loadMoreQuestions = async () => {
    try {
      const data = await fetchQuestion(subjectId, currentPage);
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
        setQuestions(prevQuestions => [
          ...prevQuestions,
          ...transformedQuestions,
        ]);
        setCurrentPage(prevPage => prevPage + 1); // 페이지 업데이트
      }
    } catch (error) {
      console.error('질문을 불러오는 중에 오류가 발생했습니다.', error);
    }
  };

  useEffect(() => {
    if (inView) {
      console.log('무한스크롤해줘잉', inView);
      // 바닥에 닿으면 실행할 함수
      loadMoreQuestions();
    }
  }, [inView, currentPage]);

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
        <div ref={ref}>하이</div>
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
