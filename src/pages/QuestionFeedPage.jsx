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
import useSubjectDataRecoil from '../contexts/useSubjectDataRecoil';

export default function QuestionFeedPage() {
  const { id } = useParams();
  const [subjectId, setSubjectId] = useState(id);
  const [questions, setQuestions] = useState([]);
  const [subjectData, setSubjectData] = useSubjectDataRecoil();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '100px',
  });
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  let limit = 8;

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
        console.log(transformedQuestions);
      } else {
        setQuestions([]);
      }
    });
  }, []);

  // ============무한스크롤 구현 시도중====================================
  async function getQuestions() {
    const query = `limit=${limit}&offset=${offset}`; //
    console.log(query);
    const response = await fetch(
      `https://openmind-api.vercel.app/3-2/subjects/${subjectId}/questions/?${query}`,
    );
    const result = await response.json();
    if (result.results.length < limit) limit = result.results.length;
    console.log(result);
    return result;
  }
  // 안녕하십니까!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 어 그런가요? 16개만 나오는듯..!?
  // 오 어떤가요 먼가 달라졌죠
  const loadMoreQuestions = async () => {
    // 좋은 접근입니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    try {
      const data = await getQuestions();
      const transformedQuestions = data.results.map(question => ({
        ...question,
      }));
      console.log('transformedData: ', transformedQuestions);
      if (data.results.length) {
        // 만약 결과가 있다면 상태를 업데이트 ㅎ 됐당!!!!!!!!!!!!!!!!!!
        setOffset(prevOffset => prevOffset + limit);
        setQuestions(prevData => [...prevData, ...transformedQuestions]);
      }
      if (loading) return; // 이미 로딩 중이면 중복 호출 방지
      setLoading(true);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };
  // 라이브러리를 안 쓰는 것이 덜 복잡할 수도 있습니다!

  // 스크롤 시 추가 데이터 로딩
  // if(results.length < limit) limit = results.length // 저는 가보겠습니다!! 나중에 좀 더 코드 정리를.. 하시죠..!!
  useEffect(() => {
    limit = 8;
    loadMoreQuestions();
  }, [inView]);

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
          <FeedBox>
            {questions.map(questionItem => (
              <FeedCard
                key={questionItem.id}
                question={questionItem}
                subjectId={subjectId}
                setSubjectId={setSubjectId}
              />
            ))}
            <div ref={ref}>하이</div>
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
