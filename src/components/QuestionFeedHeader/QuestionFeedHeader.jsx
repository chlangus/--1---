import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchSubject from '../../services/FetchSubject';
import handleFacebookShareClick from '../../utils/HandleFacebookShareClick';
import HandleKakaoShareClick from '../../utils/HandleKakaoShareClick';
import QuestionFeedHead from '../../assets/QuestionFeedHead.svg';
import QuestionFeedLogo from '../../assets/QuestionFeedLogo.svg';
import LinkShare from '../../assets/Share.svg';
import Facebook from '../../assets/Facebook.svg';

function QuestionFeedHeader() {
  const [subjectData, setSubjectData] = useState({ imageSource: '', name: '' });
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    fetchSubject(2387).then(data => {
      if (data) {
        setSubjectData(data);
      }
    });
  }, []);

  const showCopySuccessToast = () => {
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 5000);
  };

  const handleLinkShareClick = () => {
    const urlToCopy = 'http://localhost:3000/post/%EB%8B%89%EB%84%A4%EC%9E%84';
    navigator.clipboard.writeText(urlToCopy).then(() => {
      showCopySuccessToast();
    });
  };

  return (
    <div>
      <QuestionFeedHeaderBox>
        <HeadImg src={QuestionFeedHead} alt="main-header-img" />
        <LogoImg src={QuestionFeedLogo} alt="logo" />
        <ProfileImg src={subjectData.imageSource} alt="profileimg" />
      </QuestionFeedHeaderBox>
      <QuestionProfileText>{subjectData.name} </QuestionProfileText>
      <QuestionShareIcon>
        <LinkShareicon
          src={LinkShare}
          alt="shareicon"
          onClick={handleLinkShareClick}
        />
        {isToastVisible && <ToastMessage>URL이 복사되었습니다.</ToastMessage>}
        <HandleKakaoShareClick />
        <Facebookicon
          src={Facebook}
          alt="facebookicon"
          onClick={handleFacebookShareClick}
        />
      </QuestionShareIcon>
      <QuestionWriteButton>
        <QuestionWriteText>질문 작성하기</QuestionWriteText>
      </QuestionWriteButton>
    </div>
  );
}

const LinkShareicon = styled.img``;

const Facebookicon = styled.img``;

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

const QuestionWriteButton = styled.button`
  display: flex;
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 200px;
  background: var(--Brown-40, #542f1a);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const QuestionWriteText = styled.p`
  color: var(--Grayscale-10, #fff);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

const ToastMessage = styled.div`
  position: fixed;
  display: inline-flex;
  bottom: 30px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 167px;
  height: 42px;
  color: #666666
  background: var(--Grayscale-60, #000);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export default QuestionFeedHeader;
