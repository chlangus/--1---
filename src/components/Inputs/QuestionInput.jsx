import { useState } from 'react';
import styled from 'styled-components';
import photo from '../../assets/Photo.svg';

export default function QuestionInput() {
  const [question, setQuestion] = useState('');

  // textarea 값이 변경될 때마다 호출,
  // 현재 값으로 question 상태를 업데이트
  const handleQuestionChange = e => {
    setQuestion(e.target.value);
  };

  // 질문을 보내는 역할
  const handleSendQuestion = () => {
    console.log('Sending question:', question);

    fetch(
      'https://openmind-api.vercel.app/3-2/subjects/{subjectId}/questions/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      },
    )
      .then(response => response.json())
      // 성공적으로 response 받으면 모달 창 꺼짐
      .then(() => setModalOpen(false))
      .catch(error => {
        console.error('질문 등록 실패 : ', error);
      });
  };

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
          <textarea
            placeholder="질문을 입력해주세요"
            value={question}
            onChange={handleQuestionChange}
          />
          -
        </div>
        <Button
          onClick={question ? handleSendQuestion : null}
          style={{
            cursor: question ? 'pointer' : 'default',
            background: question
              ? 'var(--Brown-30, #C7BBB5)'
              : ' var(--Brown-10, #F5F1EE)',
            color: question
              ? 'var(--Brown-10, #F5F1EE)'
              : 'var(--Brown-30, #C7BBB5)',
          }}
        >
          질문 보내기
        </Button>
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
    background: var(--Grayscale-20, #f9f9f9);
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
  color: var(--Grayscale-10, #fff);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem; /* 137.5% */
  border-radius: 0.8rem;
  margin-top: 0.8rem;
  height: 5rem;
  border: none;
`;
