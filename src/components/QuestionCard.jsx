import styled from 'styled-components';
import messageIcon from '../assets/message-icon.svg';
import profileImg from '../assets/sample-profile-img.svg';

export default function QuestionCard() {
  return (
    <CardBox>
      <ProfileWrapper>
        <ProfileImg src={profileImg} alt="프로필 이미지" />
        <ProfileName>뿡빵이는 강아지</ProfileName>
      </ProfileWrapper>
      <QuestionInfo>
        <QuestionCount>
          <MessageIcon src={messageIcon} alt="메세지 아이콘" />
          <span>받은 질문</span>
        </QuestionCount>
        <span>9개</span>
      </QuestionInfo>
    </CardBox>
  );
}

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 18.7rem;
  padding: 2rem;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colorGrayScale40};
  background: ${({ theme }) => theme.colorGrayScale10};
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;
`;

const ProfileImg = styled.img`
  display: flex;
  width: 6rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
`;

const ProfileName = styled.h2`
  color: ${({ theme }) => theme.colorGrayScale60};
  font-size: var(--font-body1);
  font-style: normal;
  font-weight: var(--weight-regular);
  line-height: 2.5rem;
`;

const QuestionCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const MessageIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const QuestionInfo = styled.div`
  display: flex;
  height: 2.2rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: ${({ theme }) => theme.colorGrayScale40};
  font-size: var(--font-body3);
  font-style: normal;
  font-weight: var(--weight-regular);
  line-height: 2.2rem;
`;
