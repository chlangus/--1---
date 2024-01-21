import React, { useState } from 'react';
import styled from 'styled-components';
import ModalWindow from '../Modal/ModalWindow';

function QuestionWriteButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const handle = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && <ModalWindow isOpen={handle} />}
      <QuestionButton
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <QuestionWriteText>질문 작성하기</QuestionWriteText>
      </QuestionButton>
    </>
  );
}

const QuestionButton = styled.button`
  display: flex;
  position: absolute;
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
