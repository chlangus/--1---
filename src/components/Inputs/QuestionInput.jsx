import styled from 'styled-components';
import photo from '../../assets/Photo.svg';

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
        <Button>질문 보내기</Button>
      </ModalInput>
    </>
  );
}

const ModalSendTo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 1.5rem auto;
  align-self: stretch;

  .to {
    color: ${({ theme }) => theme.colorGrayScale60};
    font-size: 18px;
    font-family: Actor;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .nickname {
    color: ${({ theme }) => theme.colorGrayScale60};

    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem; /* 137.5% */ /* 137.5% */
  }
`;

const ModalInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  textarea {
    display: flex;
    width: 53.2rem;
    height: 18rem;
    padding: 1.6rem;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    gap: 1rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colorGrayScale20};
    font-family: Pretendard;
    font-size: 1.52rem;
    font-style: normal;
    font-weight: 400;
    border: none;
    resize: none;
  }
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem;
  color: ${({ theme }) => theme.colorGrayScale10};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem; /* 137.5% */
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colorBrown30};
  margin-top: 0.8rem;
  height: 5rem;
  border: none;
  cursor: pointer;
`;
