import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import mainBg from '../assets/main-bg.svg';
import NameInput from '../components/Inputs/NameInput';
import QuestionButton from '../components/Buttons/QuestionButton';
import storeId from '../services/storeId';
import SendQuestionButton from '../components/Buttons/SendQuestionButton';

export default function MainPage() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const handleInputValue = name => {
    setInputValue(name);
  };

  if (localStorage.getItem('userAccounts') === null) {
    // 저장된 데이터 없으면 배열로 초기화
    localStorage.setItem('userAccounts', JSON.stringify([]));
  }

  // parse로 바꿔준 객체 저장해줌
  const sendName = async () => {
    setInputValue(inputValue);
    const { id } = await storeId(inputValue); // 이름 post요청으로 보내주고 결과 id 받아옴
    const values = JSON.parse(localStorage.getItem('userAccounts')); // 기존 데이터 불러와서 데이터타입 변환

    values.unshift({ id, name: inputValue }); // 배열 앞에 유저정보 저장
    sessionStorage.setItem('id', id); // 로컬스토리지에 id값 저장
    localStorage.setItem('userAccounts', JSON.stringify(values)); // 이 브라우저의 모든 유저 정보 저장
    navigate(`/post/${id}/answer`); // id에따른 answer페이지로 이동
  };

  return (
    <PageWrapper>
      <MainLogoAndInputWrapper>
        <Img src={logo} alt="logo-imgage" />
        <Link to="/list">
          <ButtonWrapper>
            <SendQuestionButton>질문하러 가기</SendQuestionButton>
          </ButtonWrapper>
        </Link>
        <InputAndButtonBox>
          <NameInput onHandleInput={handleInputValue} />
          <QuestionButton onHandleButton={sendName}>질문 받기</QuestionButton>
        </InputAndButtonBox>
      </MainLogoAndInputWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: var(--grayscale-20, #f9f9f9);
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  height: 100vh;
`;

const Img = styled.img`
  max-width: 456px;
  max-height: 180px;
  @media (max-width: 768px) {
    width: 248px;
    height: 98px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 130px;
  top: 45px;
  @media (max-width: 768px) {
    position: static;
  }
`;

const InputAndButtonBox = styled.div`
  width: 100%;
  max-width: 400px;
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: var(--Grayscale-10, #fff);
  @media (max-width: 768px) {
    max-width: 305px;
    padding: 24px;
  }
`;

const MainLogoAndInputWrapper = styled.div`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
