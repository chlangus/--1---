import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchSubject from '../../services/FetchSubject';
import QuestionFeedHead from '../../assets/QuestionFeedHead.svg';
import QuestionFeedLogo from '../../assets/QuestionFeedLogo.svg';
import LinkShareIcon from '../Buttons/LinkShareIcon';
import FacebookShareIcon from '../Buttons/FacebookShareIcon';
import KakaoShareIcon from '../Buttons/KakaoShareIcon';

function QuestionFeedHeader() {
  const [subjectData, setSubjectData] = useState({ imageSource: '', name: '' });

  useEffect(() => {
    fetchSubject(2387).then(data => {
      if (data) {
        setSubjectData(data);
      }
    });
  }, []);

  return (
    <div>
      <QuestionFeedHeaderBox>
        <HeadImg src={QuestionFeedHead} alt="main-header-img" />
        <LogoImg src={QuestionFeedLogo} alt="logo" />
        <ProfileImg src={subjectData.imageSource} alt="profileimg" />
      </QuestionFeedHeaderBox>
      <QuestionProfileText>{subjectData.name} </QuestionProfileText>
      <QuestionShareIcon>
        <LinkShareIcon />
        <KakaoShareIcon />
        <FacebookShareIcon />
      </QuestionShareIcon>
    </div>
  );
}

const QuestionFeedHeaderBox = styled.div`
  position: relative;
`;

const HeadImg = styled.img`
  width: 100%;
  height: 234px;
  object-fit: cover;
`;

const LogoImg = styled.img`
  position: absolute;
  top: 50px;
  transform: translateX(-50%);
  left: 50%;
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 129px;
  transform: translateX(-50%);
  left: 50%;
  border-radius: 50%;
`;

const QuestionProfileText = styled.p`
  text-align: center;
  color: var(--Grayscale-60, #000);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  margin-top: 110px;
`;

const QuestionShareIcon = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  gap: 12px;
  justify-content: center;
  margin: 0;
`;

export default QuestionFeedHeader;
