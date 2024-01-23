import styled from 'styled-components';
import QuestionFeedHeader from '../components/QuestionFeedHeader/QuestionFeedHeader';
import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';
import QuestionWriteButton from '../components/Buttons/QuestionWriteButton';

export default function QuestionFeedPage() {
  return (
    <Wrapper>
      <QuestionFeedHeader />
      <FeedBox>
        <FeedCard />
        <FeedCard />
        <FeedCard />
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
