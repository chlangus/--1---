import styled from 'styled-components';
import ModalHeader from './ModalHeader';
import QuestionInput from './QuestionInput';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
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
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  border-radius: 1.5rem;
  background-color: var(--Grayscale-10, #fff);
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  width: 61.2rem;
  height: 45.4rem;
  flex-shrink: 0;
  padding: 4rem;
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
