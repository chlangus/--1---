import styled from 'styled-components';
import deleteQuestion from '../../services/DeleteQuestion';
import binIcon from '../../assets/Trash.svg';

function DeleteQuestionButton({ questionId }) {
  const handleDelete = () => {
    alert('정말로 삭제하시겠습니까?');
    deleteQuestion(questionId);
  };
  return (
    <S.Button onClick={handleDelete}>
      <img src={binIcon} alt="delete" />
      <S.Content>
        <span>질문삭제</span>
      </S.Content>
    </S.Button>
  );
}
const Button = styled.button`
  display: flex;
  // width: 120px;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  border-radius: 8px;
  border: 1px solid var(--color-grayscale-30);
  background: var(--color-grayscale-10);

  /* 1pt */
  box-shadow: var(--shadow-1pt);
  color: var(--color-grayscale-50);

  cursor: pointer;

  @media (min-width: 768px) {
    padding: 6px 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colorGrayScale60};
    background: ${({ theme }) => theme.colorGrayScale20};
  }
`;

const Content = styled.span`
  display: none;

  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  // color: var(--color-grayscale-50);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */

  @media (min-width: 768px) {
    display: flex;
  }
`;

// 스타일
const S = {
  Button,
  Content,
};

export default DeleteQuestionButton;
