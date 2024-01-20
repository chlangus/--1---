import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';

export default function AnswerPage() {
  const isAnswerPage = true;
  return (
    <FeedBox>
      <FeedCard isAnswerPage={isAnswerPage} />
    </FeedBox>
  );
}
