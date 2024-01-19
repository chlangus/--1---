import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
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

export default function QuestionButton({ children, onHandleButton }) {
  return <Button onClick={onHandleButton}>{children}</Button>;
}
