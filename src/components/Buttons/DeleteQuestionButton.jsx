import styled from 'styled-components';

function DeleteQuestionButton() {
  return (
    <S.Button>
      <S.Content>
        <span>질문삭제</span>
      </S.Content>
    </S.Button>
  );
}
const Button = styled.button`
  display: flex;
  width: 103px;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--color-grayscale-30);
  background: var(--color-grayscale-10);

  /* 1pt */
  box-shadow: var(--shadow-1pt);
`;

const Content = styled.span`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  color: var(--color-grayscale-50);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

// 스타일
const S = {
  Button,
  Content,
};

export default DeleteQuestionButton;
