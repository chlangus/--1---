import styled from 'styled-components';
import messageIcon from '../assets/message-icon.svg';

export default function FeedBox({ children }) {
  return (
    <S.Container>
      <S.QuestionCount>
        <img src={messageIcon} alt="message-icon" />
        <S.Text>3개의 질문이 있습니다</S.Text>
      </S.QuestionCount>
      {children}
    </S.Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 327px;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1.6rem;
  border: 1px solid var(--color-brown-30);
  background: var(--color-brown-10);

  @media (min-width: 768px) {
    width: 704px;
  }
`;

const QuestionCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const Text = styled.span`
  color: var(--color-brown-40);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: var(--font-body2);
  line-height: 2.4rem; /* 133.333% */
  font-style: normal;
  font-weight: var(--weight-regular);

  @media (min-width: 768px) {
    font-size: var(--font-body1);
    line-height: 2.5rem; /* 125% */
  }
`;

// 스타일
const S = {
  Container,
  QuestionCount,
  Text,
};
