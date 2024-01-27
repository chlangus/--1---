import styled from 'styled-components';
import deleteQuestion from '../../services/DeleteQuestion';

function DeleteAllButton({ text, questions, setQuestions }) {
  const handleDelete = () => {
    alert('정말로 삭제하시겠습니까?'); // 얘도 모달로 만들까 고민중..
    questions.map(item => deleteQuestion(item.id));
    // 아마 피드 불러오는 개수 때문인거 같은데 9개 이상부터 한번에 삭제가 안됨... 1-8개까지는 ㄱㅊ
    setQuestions([]);
  };

  return (
    <Button onClick={handleDelete}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  width: 70px;
  height: 25px;

  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 20rem;
  background: var(--color-brown-40);
  box-shadow: var(--shadow-2pt);
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 100px;
    height: 35px;
  }
`;

const ButtonText = styled.p`
  color: var(--color-grayscale-10);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1rem;
  font-style: normal;
  font-weight: var(--weight-regular);
  line-height: 25px;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default DeleteAllButton;
