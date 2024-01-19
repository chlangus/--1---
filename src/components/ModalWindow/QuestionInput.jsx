import styled from 'styled-components';
import photo from '../../assets/Photo.svg';

const ModalSendTo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 15px auto;

  .to {
    color: var(--Grayscale-60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 18px;
    font-family: Actor;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
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

  textarea {
    width: 532px;
    height: 180px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    gap: 10px;
    border: none;
    border-radius: 8px;
    resize: none;
    background: var(--Grayscale-20, #f9f9f9);
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Brown-30, #c7bbb5);
  color: var(--Grayscale-10, #fff);
  padding: 12px 24px;
  margin-top: 8px;
  gap: 10px;
  width: 100%;
  height: auto;
  border: none;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 22px;
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
