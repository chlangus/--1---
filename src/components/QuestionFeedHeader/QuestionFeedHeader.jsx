import styled from 'styled-components';
import QuestionFeedHead from '../../assets/QuestionFeedHead.svg';
import QuestionFeedLogo from '../../assets/QuestionFeedLogo.svg';
import Profiledummy from '../../assets/ProfileImg.png';
import LinkShare from '../../assets/Share.svg';
import Kakaotalk from '../../assets/Kakaotalk.svg';
import Facebook from '../../assets/Facebook.svg';

function QuestionFeedHeader() {
  return (
    <div>
      <QuestionFeedHeaderBox>
        <HeadImg src={QuestionFeedHead} alt="main-header-img" />
        <LogoImg src={QuestionFeedLogo} alt="logo" />
        <ProfileImg src={Profiledummy} alt="profileimg" />
      </QuestionFeedHeaderBox>
      <QuestionProfileText>아초는고양이</QuestionProfileText>
      <QuestionShareIcon>
        <LinkShareicon src={LinkShare} alt="shareicon" />
        <Kakaotalkicon src={Kakaotalk} alt="kakaoicon" />
        <Facebookicon src={Facebook} alt="facebookicon" />
      </QuestionShareIcon>
      <QuestionWriteButton>
        <QuestionWriteText>질문 작성하기</QuestionWriteText>
      </QuestionWriteButton>
    </div>
  );
}

const LinkShareicon = styled.img``;

const Kakaotalkicon = styled.img``;

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
  margin-top: 40px;
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

export default QuestionFeedHeader;
