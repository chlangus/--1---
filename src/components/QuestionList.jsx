import styled from 'styled-components';
import QuestionCard from './QuestionCard';

function ListUl() {
  return (
    <StyledUl>
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
    </StyledUl>
  );
}

export default function QuestionList() {
  return <ListUl />;
}

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(18.6rem, 22rem));
  gap: 2rem;
  @media screen and (max-width: 865px) {
    grid-template-columns: repeat(3, minmax(18.6rem, 22rem));
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(15.5rem, 22rem));
    gap: 1.6rem;
  }
`;
