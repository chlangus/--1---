import styled from 'styled-components';

function DeleteQuestionButton() {
  return (
    <S.Button>
      <S.Content>
        <span>삭제하기</span>
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
  border: 1px solid var(--Grayscale-30, #cfcfcf);
  background: var(--Grayscale-10, #fff);

  /* 1pt */
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
`;

const Content = styled.span`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  color: var(--Grayscale-50, #515151);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
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
