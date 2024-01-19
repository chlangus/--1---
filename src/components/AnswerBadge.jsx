import styled from 'styled-components';

export default function AnswerBadge() {
  return <S.Badge />;
}
const Badge = styled.span`
  display: flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.8rem;

  border: 1px solid var(--Brown-40, #542f1a); //답변완료
  background: var(--Grayscale-10, #fff);

  border: 1px solid var(--Grayscale-40, #818181); //미답변
  background: var(--Grayscale-10, #fff);

  color: var(--Brown-40, #542f1a); //답변완료
  color: var(--Grayscale-40, #818181); //미답변

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: var(--font-caption1);
  font-style: normal;
  font-weight: var(--weight-medium);
  line-height: 1.8rem; /* 128.571% */
`;

// 스타일
const S = {
  Badge,
};
