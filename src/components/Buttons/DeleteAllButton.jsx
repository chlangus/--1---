import styled from 'styled-components';
import deleteQuestion from '../../services/DeleteQuestion';

function DeleteAllButton({ text }) {
  const handleDelete = async () => {
    await deleteQuestion(3657);
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
