import styled from 'styled-components';
import arrowRight from '../assets/arrow-right.svg';

const StyledButton = styled.button`
  position: absolute;
  right: 130px;
  top: 45px;
  display: flex;
  width: 192px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Brown-40, #542f1a);
  background: var(--Brown-10, #f5f1ee);
  color: var(--Brown-40, #542f1a);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

const Img = styled.img`
  width: 18px;
  height: 18px;
`;

export default function SendQuestionButton({ children }) {
  return (
    <StyledButton>
      {children}
      <Img src={arrowRight} alt="arrowRight" />
    </StyledButton>
  );
}
