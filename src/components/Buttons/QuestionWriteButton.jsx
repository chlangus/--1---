import React from 'react';
import styled from 'styled-components';

function QuestionWriteButton() {
  return (
    <QuestionButton>
      <QuestionWriteText />
    </QuestionButton>
  );
}

const QuestionButton = styled.button`
  ::after {
    content: '질문 작성하기';
  }
  display: flex;
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 200px;
  background: var(--Brown-40, #542f1a);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;

  @media (max-width: 576px) {
    ::after {
      content: '질문 작성';
    }
    width: 123px;
    height: 54px;
    padding: 0;
  }
`;

const QuestionWriteText = styled.p`
  color: var(--Grayscale-10, #fff);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

export default QuestionWriteButton;
