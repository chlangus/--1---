import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import messageIcon from '../assets/message-icon.svg';

export default function QuestionCard({ id, name, imageSource, questionCount }) {
  const navigateToPage = useNavigate();

  return (
    <CardBox onClick={() => navigateToPage(`/post/${id}`)}>
      <ProfileWrapper>
        <ProfileImg src={imageSource} alt="프로필 이미지" />
        <ProfileName>{name}</ProfileName>
      </ProfileWrapper>
      <ContentWrapper>
        <QuestionInfo>
          <MessageIcon src={messageIcon} alt="메시지 아이콘" />
          <span>받은 질문</span>
        </QuestionInfo>
        <span>{questionCount} 개</span>
      </ContentWrapper>
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
  border: 1px solid var(--color-grayscale-40);
  background: var(--color-grayscale-10);
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
  color: var(--color-grayscale-60);
  font-size: var(--font-body1);
  font-style: normal;
  font-weight: var(--weight-regular);
  line-height: 2.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 2.2rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: var(--color-grayscale-40);
  font-size: var(--font-body3);
  font-style: normal;
  font-weight: var(--weight-regular);
  line-height: 2.2rem;
`;

const QuestionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const MessageIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
