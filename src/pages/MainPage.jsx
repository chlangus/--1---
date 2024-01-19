import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import mainBg from '../assets/main-bg.svg';
import NameInput from '../components/NameInput';
import QuestionButton from '../components/QuestionButton';
import SendQuestionButton from '../components/SendQuestionButton';
import storeId from '../services/storeId';

export default function MainPage() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputValue = name => {
    setInputValue(name);
  };
  const sendName = async () => {
    setInputValue(inputValue);
    const { id } = await storeId(inputValue); // 이름 post요청으로 보내주고 결과 id 받아옴

    localStorage.setItem('id', id); // 로컬스토리지에 id값 저장
    navigate(`/post/${id}/answer`); // id에따른 answer페이지로 이동
  };

  return (
    <PageWrapper>
      <Link to="/list">
        <SendQuestionButton>질문하러 가기</SendQuestionButton>
      </Link>
      <MainLogoAndInputWrapper>
        <Img src={logo} alt="logo-imgage" />
        <InputAndButtonBox>
          <NameInput onHandleInput={handleInputValue} />
          <QuestionButton onHandleButton={sendName}>질문 받기</QuestionButton>
        </InputAndButtonBox>
      </MainLogoAndInputWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: var(--Grayscale-20, #f9f9f9);
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  height: 100vh;
  width: 100%;
`;

const Img = styled.img`
  width: 456px;
  height: 180px;
`;

const InputAndButtonBox = styled.div`
  width: 400px;
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: var(--Grayscale-10, #fff);
`;

const MainLogoAndInputWrapper = styled.div`
  padding: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
