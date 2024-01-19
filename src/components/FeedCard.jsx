import styled from 'styled-components';
import thumbsUp from '../assets/thumbs-up.svg';
import thumbsDown from '../assets/thumbs-down.svg';

export default function FeedCard() {
  return (
    <S.Container>
      <S.QuestionBox>
        <S.QuestionTime>질문 · 2주전</S.QuestionTime>
        <S.QuestionText>좋아하는 동물은?</S.QuestionText>
        <S.AnswerFrame />
        <S.ReactionFrame>
          <S.ReactionBox>
            <S.LikeBox>
              <img src={thumbsUp} alt="thumbs-up" />
              <span>좋아요</span>
            </S.LikeBox>
            <S.LikeBox>
              <img src={thumbsDown} alt="thumbs-down" />
              <span>싫어요</span>
            </S.LikeBox>
          </S.ReactionBox>
        </S.ReactionFrame>
      </S.QuestionBox>
    </S.Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 684px;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;

  border-radius: 1.6rem;
  background: var(--color-grayscale-10);

  box-shadow: var(--shadow-1pt);
`;
const QuestionBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;

const QuestionTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: var(--color-grayscale-40);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: --font-caption1;
  font-style: normal;
  font-weight: --weight-medium
  line-height: 1.8rem; /* 128.571% */
`;

const QuestionText = styled.div`
  align-self: stretch;
  color: var(--Grayscale-60, #000);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem; /* 133.333% */
`;

const ReactionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2.4rem;
  align-self: stretch;

  border-top: 1px solid var(--color-grayscale-30);
`;

const ReactionBox = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

const LikeBox = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--color-grayscale-40);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

const AnswerFrame = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
// 스타일
const S = {
  Container,
  QuestionBox,
  QuestionTime,
  QuestionText,
  ReactionFrame,
  ReactionBox,
  LikeBox,
  AnswerFrame,
};
