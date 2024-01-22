import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnswerBadge from './Badges/AnswerBadge';
import KebabButton from './Buttons/KebabButton';
import profileImg from '../assets/sample-profile-img.svg';
import ReactionButton from './Buttons/ReactionButton';
import fetchQuestion from '../services/FetchQuestion';
import timeSince from '../utils/TimeSince';

export default function FeedCard({ isAnswerPage }) {
  const [questionData, setQuestionData] = useState({
    content: '',
    createdAt: '',
  });

  useEffect(() => {
    fetchQuestion(2387).then(data => {
      if (data.results?.length) {
        const question = data.results[0];
        setQuestionData({
          ...question,
          createdAt: timeSince(question.createdAt),
        });
      }
    });
  }, []);

  return (
    <S.Container>
      <S.BadgeFrame>
        <AnswerBadge $isAnswered />
        {isAnswerPage && <KebabButton />}
      </S.BadgeFrame>
      <S.QuestionBox>
        <S.QuestionTime>질문 · {questionData.createdAt}</S.QuestionTime>
        <S.QuestionText>{questionData.content}</S.QuestionText>
      </S.QuestionBox>
      <S.AnswerFrame>
        <S.Profile src={profileImg} alt="profile" />
        <S.AnswerBox>
          <div>아초는 고양이</div>
          <div>(공용 컴포넌트...기다리는중..)</div>
        </S.AnswerBox>
      </S.AnswerFrame>
      <S.ReactionFrame>
        <ReactionButton /> {/* id랑 좋아요 싫어요 개수 전달해줘야 함 */}
      </S.ReactionFrame>
    </S.Container>
  );
}

const Container = styled.div`
  display: flex;
  // width: 684px;
  width: 100%;

  flex-direction: column;
  align-items: flex-start;
  padding: 2.4rem;
  gap: 2.4rem;

  border-radius: 1.6rem;
  background: var(--color-grayscale-10);

  box-shadow: var(--shadow-1pt);

  @media (min-width: 768px) {
    padding: 3.2rem;
    gap: 3.2rem;
  }
`;
const QuestionBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex: 1 0 0;
`;

const BadgeFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const QuestionTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: var(--color-grayscale-40);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: var(--font-caption1);
  font-style: normal;
  font-weight: var(--weight-medium);
  line-height: 1.8rem; /* 128.571% */
`;

const QuestionText = styled.div`
  align-self: stretch;
  color: var(--Grayscale-60, #000);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: var(--font-body3);
  line-height: 2.2rem;
  font-style: normal;
  font-weight: var(--weight-regular);

  @media (min-width: 768px) {
    font-size: var(--font-body2);
    line-height: 2.4rem; /* 133.333% */
  }
`;

const ReactionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2.4rem;
  align-self: stretch;

  border-top: 1px solid var(--color-grayscale-30);
`;

const AnswerFrame = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;
`;

const Profile = styled.img`
  border-radius: 4.8rem;
  background:
    url(${profileImg}) lightgray 50% / cover no-repeat,
    #d9d9d9;
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;

  color: var(--color-grayscale-60);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: var(--font-caption1);
  line-height: 1.8rem;
  font-style: normal;
  font-weight: var(--weight-regular);

  @media (min-width: 768px) {
    font-size: var(--font-body2);
    line-height: 2.4rem; /* 133.333% */
  }
`;
// 스타일
const S = {
  Container,
  QuestionBox,
  QuestionTime,
  QuestionText,
  ReactionFrame,
  AnswerFrame,
  Profile,
  AnswerBox,
  BadgeFrame,
};
