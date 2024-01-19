import styled from 'styled-components';
import ModalHeader from './ModalHeader';
import QuestionInput from './QuestionInput';

const ModalWrapper = styled.div`
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--Dim, rgba(0, 0, 0, 0.56));
  /* background-color: rgba(0, 0, 0, 0.56); */
  z-index: 100;
`;

const ModalContent = styled.div`
  position: relative;
  /* justify-content: center;
  align-items: center; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--Grayscale-10, #fff);
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  width: 612px;
  height: 454px;
  padding: 40px 40px 70px;
  flex-shrink: 0;
  border-radius: 24px;
  border: none;
  z-index: 100;
`;

export default function ModalWindow() {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader />
        <QuestionInput />
      </ModalContent>
    </ModalWrapper>
  );
}
