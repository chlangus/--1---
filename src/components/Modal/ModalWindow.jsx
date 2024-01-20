import styled from 'styled-components';
import QuestionInput from '../QuestionInput';
import messageIcon from '../../assets/Messages.svg';
import closeButton from '../../assets/Close.svg';

export default function ModalWindow() {
  // const openModal = () => setIsModalOpen(true);

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <div>
            <img src={messageIcon} alt="말풍선 아이콘" />
            <div>질문을 작성하세요</div>
          </div>
          <div>
            <img src={closeButton} alt="닫기 버튼" />{' '}
          </div>
        </ModalHeader>
        <QuestionInput />
      </ModalContent>
    </ModalWrapper>
  );
}

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
  z-index: 100;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--Grayscale-60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 30px;
    line-height: 1.875rem; /* 125% */
  }

  img {
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  position: relative;
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
