import styled from 'styled-components';

export default function QuestionButton() {
  const Button = styled.button`
    width: 336px;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--Brown-40, #542f1a);
    color: var(--Grayscale-10, #fff);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `;

  return <Button>질문받기</Button>;
}
