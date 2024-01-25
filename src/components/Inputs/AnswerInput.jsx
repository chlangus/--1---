import styled from 'styled-components';

export default function AnswerInput({ isEditMode }) {
  const btnText = isEditMode ? '수정 완료' : '답변 완료';
  return (
    <Input>
      <div>
        <textarea placeholder="질문을 입력해주세요" />
      </div>
      <Button>{btnText}</Button>
    </Input>
  );
}

const Input = styled.div`
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
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem; /* 137.5% */
  border-radius: 0.8rem;
  background: var(--Brown-30, #c7bbb5);
  margin-top: 0.8rem;
  height: 5rem;
  border: none;
  cursor: pointer;
`;
