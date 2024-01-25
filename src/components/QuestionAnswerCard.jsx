/* eslint-disable no-nested-ternary */
import { React, useState } from 'react';
import styled from 'styled-components';
import AnswerBadge from './Badges/AnswerBadge';
import KebabButton from './Buttons/KebabButton';
import profileImg from '../assets/sample-profile-img.svg';
import ReactionButton from './Buttons/ReactionButton';
import AnswerInput from './Inputs/AnswerInput';

export default function QuestionAnswerCard({
  question,
  subjectData,
  isAnswerPage,
  isRejected,
  setIsRejected,
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <QuestionWrapper>
      <S.BadgeFrame>
        <AnswerBadge $isAnswered={question.isAnswered} />
        {isAnswerPage && (
          <KebabButton
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            setIsRejected={setIsRejected}
          />
        )}
      </S.BadgeFrame>
      <S.QuestionBox>
        <S.QuestionTime>질문 · {question.createdAt}</S.QuestionTime>
        <S.QuestionText>{question.content}</S.QuestionText>
      </S.QuestionBox>
      <S.AnswerFrame>
        {question.answer ? (
          <>
            <S.Profile src={subjectData.imageSource} alt="profile" />
            <S.AnswerBox>
              <AnswerNameBox>
                <S.AnswerName>{subjectData.name}</S.AnswerName>
                <S.AnswerTime>{question.answer.createdAt}</S.AnswerTime>
              </AnswerNameBox>
              {/* <S.AnswerText>{question.answer.content}</S.AnswerText> */}

              {isEditMode ? (
                <AnswerInput isEditMode />
              ) : (
                <S.AnswerText $isRejected>
                  {isRejected ? '답변거절' : question.answer.content}
                </S.AnswerText>
              )}
            </S.AnswerBox>
          </>
        ) : (
          <AnswerInput />
        )}
      </S.AnswerFrame>
      <S.ReactionFrame>
        <ReactionButton />
        {/* <DeleteQuestionButton /> 질문 개별 삭제 버튼 - 추후 수정.. */}
      </S.ReactionFrame>
    </QuestionWrapper>
  );
}

const QuestionBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex: 1 0 0;
  margin-bottom: 32px;
`;

const BadgeFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 32px;
`;

const QuestionTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.colorGrayScale40};
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
  color: ${({ theme }) => theme.colorGrayScale60};
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
  border-top: 1px solid ${({ theme }) => theme.colorGrayScale30};
`;

const AnswerFrame = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;
  margin-bottom: 32px;
`;

const Profile = styled.img`
  width: 48px;
  height: 48px;
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

  color: ${({ theme }) => theme.colorGrayScale60};
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

const QuestionWrapper = styled.div`
  width: 100%;
`;

const AnswerName = styled.p`
  color: var(--Grayscale-60, #000);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;

const AnswerTime = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-grayscale-40);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: var(--font-caption1);
  font-style: normal;
  font-weight: var(--weight-medium);
  line-height: 1.8rem; /* 128.571% */
`;

const AnswerNameBox = styled.div`
  display: flex;
  gap: 8px;
`;

const COLOR = {
  normal: 'var(--color-grayscale-60)',
  red: 'var(--color-red-50)',
};

const AnswerText = styled.p`
  // color: var(--Grayscale-60, #000);
  // color: var(--color-red-50);
  color: ${({ $isRejected }) =>
    $isRejected ? COLOR.red : COLOR.normal}; //컬러가 안 먹음..why?
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

const S = {
  QuestionBox,
  QuestionTime,
  QuestionText,
  ReactionFrame,
  AnswerFrame,
  Profile,
  AnswerBox,
  BadgeFrame,
  AnswerName,
  AnswerTime,
  AnswerNameBox,
  AnswerText,
};
