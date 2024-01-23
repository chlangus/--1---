import { useState } from 'react';
import styled from 'styled-components';
import QuestionFeedHeader from '../components/QuestionFeedHeader/QuestionFeedHeader';
import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';
import QuestionWriteButton from '../components/Buttons/QuestionWriteButton';

export default function QuestionFeedPage() {
  const [subjectId, setSubjectId] = useState(2387);
  const [subjectData, setSubjectData] = useState({
    imageSource: '',
    name: '',
    questionCount: '',
  });

  return (
    <Wrapper>
      <QuestionFeedHeader
        subjectData={subjectData}
        setSubjectData={setSubjectData}
      />
      <FeedBox subjectData={subjectData}>
        <FeedCard subjectId={subjectId} setSubjectId={setSubjectId} />
      </FeedBox>
      <QuestionWriteButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--color-grayscale-20);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.4rem;
`;
