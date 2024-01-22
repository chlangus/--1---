import FeedBox from '../components/FeedBox';
import FeedCard from '../components/FeedCard';

export default function AnswerPage() {
  return (
    <FeedBox>
      <FeedCard isAnswerPage />
    </FeedBox>
  );
}
