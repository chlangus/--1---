import styled from 'styled-components';

export default function AnswerBadge() {
  return <S.Badge />;
}
const Badge = styled.span`
  display: flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;

  border: 1px solid var(--Brown-40, #542f1a); //답변완료
  background: var(--Grayscale-10, #fff);

  border: 1px solid var(--Grayscale-40, #818181); //미답변
  background: var(--Grayscale-10, #fff);

  color: var(--Brown-40, #542f1a); //답변완료
  color: var(--Grayscale-40, #818181); //미답변

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

// 스타일
const S = {
  Badge,
};
