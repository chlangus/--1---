import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import QuestionFeedHeader from '../components/QuestionFeedHeader/QuestionFeedHeader';
import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';
import useQuestionsAtom from '../components/hooks/useQuestions';
import DeleteAllButton from '../components/Buttons/DeleteAllButton';
import fetchQuestion from '../services/FetchQuestion';
import timeSince from '../utils/TimeSince';
import NoQuestionFeed from '../components/NoQuestionFeed';

export default function AnswerPage() {
  const { id } = useParams();

  const [subjectId, setSubjectId] = useState(id);
  // const [questions, setQuestions] = useState([]);
  const [questions, setQuestions] = useQuestionsAtom();
  const [subjectData, setSubjectData] = useState({
    imageSource: '',
    name: '',
    questionCount: '',
  });

  // answer이 question 내부에 포함되어 있다면, 데이터를 하나로 관리하는 게 편하실 거에요
  // 그리고 실제로 우리가 렌더링하고 있는 데이터는 서버에서 받아오는 question 객체 잖아요? 이 question 객체를 업데이트하고 리렌더링하는 식으로 접근하시는 것이 좋겠습니다!
  // setQuestion({...oldQuestion, answer: newAnswer }) 이런 느낌...?
  // 요거는 쓰셔도 되고 안쓰셔도 되는데, 상태값을 업데이트 할 때는 늘 새로운 참조를 보내줘야 하잖아요? 근데 그 객체가 뎁스가 깊어지면 새로운 참조를 만들기가 번거로워지는데,https://immerjs.github.io/immer/ 요런거 쓰시면 좋습니당

  // 그래서 리코일로 퀘스천 상태관리를 하고 그걸로 변경될때마다 리렌더링이 되도록 하면 된다는 말씀인가용..?!ㅇ
  // 예에에에스!

  useEffect(() => {
    fetchQuestion(subjectId).then(data => {
      if (data.results.length) {
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
  }, [subjectId]);

  return (
    <Wrapper>
      <QuestionFeedHeader
        subjectId={subjectId}
        subjectData={subjectData}
        setSubjectData={setSubjectData}
      />
      <S.DeleteAndFeed>
        <DeleteAllButton
          text="삭제하기"
          questions={questions}
          setQuestions={setQuestions}
        />

        {questions.length === 0 ? (
          <NoQuestionFeed />
        ) : (
          <FeedContainer>
            <FeedBox subjectData={subjectData}>
              {questions.map(questionItem => (
                <FeedCard
                  key={questionItem.id}
                  isAnswerPage
                  question={questionItem}
                  subjectId={subjectId}
                  subjectData={subjectData}
                  setSubjectId={setSubjectId}
                />
              ))}
            </FeedBox>
          </FeedContainer>
        )}
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

  padding-bottom: 5.4rem;
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
