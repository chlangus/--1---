import styled from 'styled-components';
import messageIcon from '../assets/Messages.svg';
import closeButton from '../assets/Close.svg';

const StyledModalHeader = styled.div`
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

export default function ModalHeader() {
  return (
    <StyledModalHeader>
      <div>
        <img src={messageIcon} alt="말풍선 아이콘" />
        <div>질문을 작성하세요</div>
      </div>
      <div>
        <img src={closeButton} alt="닫기 버튼" />{' '}
      </div>
    </StyledModalHeader>
  );
}
