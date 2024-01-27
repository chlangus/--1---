import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '100px',
  });
  // const [moreData, setMoreData] = useState([]);

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

  const loadMoreQuestions = async () => {
    try {
      const data = await fetchQuestion(subjectId, offset, limit);
      const transformedQuestions = data.results.map(question => ({
        ...question,
      }));

      setQuestions(prevData => [...prevData, ...transformedQuestions]);

      console.log('data:', data);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };

  // 맨 처음 렌더링 되었을 때 데이터를 한번 불러옴
  // useEffect(() => {
  //   loadMoreQuestions();
  // }, [subjectId]);

  // inView가 true 일 때만 데이터를 불러옴!
  // 보였다 안보이면 true에서 false로 바뀌기 때문에 useEffect가 두번 실행됨!
  useEffect(() => {
    if (inView) {
      loadMoreQuestions();
    }
  }, [inView, subjectId]);

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
          <div>
            {questions.map(data => (
              <div key={data.subjectId}>{data.content}</div>
            ))}
            <div ref={ref}>하이</div>
          </div>
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
