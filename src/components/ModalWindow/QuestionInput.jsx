import styled from 'styled-components';
import photo from '../../assets/Photo.svg';

const ModalSendTo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 15px auto;

  .to {
    color: var(--Grayscale-60, #000);
    font-size: 18px;
    font-family: Actor;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .nickname {
    color: var(--Grayscale-60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
`;

const ModalInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  textarea {
    display: flex;
    width: 33.25rem;
    height: 11.25rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    align-self: stretch;
    border-radius: 0.5rem;
    background: var(--Grayscale-20, #f9f9f9);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    border: none;
    resize: none;
  }
`;

const Button = styled.button`
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  margin: 0.5rem;
  color: var(--Grayscale-10, #fff);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */
  border-radius: 0.5rem;
  background: var(--Brown-30, #c7bbb5);
  margin-top: 8px;
  width: 100%;
  height: auto;
  border: none;
  cursor: pointer;
`;

export default function QuestionInput() {
  return (
    <>
      <ModalSendTo>
        <div className="to">To.</div>
        <div>
          <img src={photo} alt="프로필이미지" />
        </div>
        <div className="nickname">닉네임</div>
      </ModalSendTo>
      <ModalInput>
        <div>
          <textarea placeholder="질문을 입력해주세요" />
        </div>
        <div>
          <Button>질문 보내기</Button>
        </div>
      </ModalInput>
    </>
  );
}
