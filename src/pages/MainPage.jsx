import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import darkLogo from '../assets/dark-logo.svg';
import mainBg from '../assets/main-bg.svg';
import darkMainBg from '../assets/dark-main-bg.svg';
import NameInput from '../components/Inputs/NameInput';
import GetQuestionButton from '../components/Buttons/GetQuestionButton';
import storeId from '../services/storeId';
import SendQuestionButton from '../components/Buttons/SendQuestionButton';
import ThemeContext from '../contexts/ThemeContext';
import IdSelectButton from '../components/Buttons/IdSelectButton';

export default function MainPage() {
  const [inputValue, setInputValue] = useState('');
  const [connectType, setConnectType] = useState('');
  const [nicknames, setNicknames] = useState([]);
  const navigate = useNavigate();
  const handleInputValue = name => {
    setInputValue(name);
  };
  const mode = useContext(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem('userAccounts') === null) {
      // 저장된 데이터 없으면 배열로 초기화
      localStorage.setItem('userAccounts', JSON.stringify([]));
    } else {
      setNicknames(JSON.parse(localStorage.getItem('userAccounts')));
    }
  }, []);

  // useEffect로 감싸기
  // parse로 바꿔준 객체 저장해줌
  const sendName = async () => {
    setInputValue(inputValue);
    const { id } = await storeId(inputValue); // 이름 post요청으로 보내주고 결과 id 받아옴
    const values = JSON.parse(localStorage.getItem('userAccounts')); // 기존 데이터 불러와서 데이터타입 변환

    values.unshift({ id, name: inputValue }); // 배열 앞에 유저정보 저장
    localStorage.setItem('id', JSON.stringify(id)); // 현재 유저 정보 저장
    localStorage.setItem('userAccounts', JSON.stringify(values)); // 이 브라우저의 모든 유저 정보 저장
    navigate(`/post/${id}/answer`); // id에따른 answer페이지로 이동
  };

  const selectNickname = id => {
    localStorage.setItem('id', JSON.stringify(id)); // 현재 유저 정보 저장
    navigate(`/post/${id}/answer`);
  };
  return (
    <PageWrapper>
      <MainLogoAndInputWrapper>
        <Img src={mode === 'light' ? logo : darkLogo} alt="logo" />
        <Link to="/list">
          <ButtonWrapper>
            <SendQuestionButton>질문하러 가기</SendQuestionButton>
          </ButtonWrapper>
        </Link>
        <InputAndButtonBox>
          <IdSelectButton setConnectType={setConnectType} />
          {connectType &&
            (connectType === 'ordinary' ? (
              nicknames.map(nickname => (
                <button
                  type="button"
                  key={nickname.id}
                  onClick={() => selectNickname(nickname.id)}
                >
                  {nickname.name}
                </button>
              ))
            ) : (
              <>
                <NameInput onHandleInput={handleInputValue} />
                <GetQuestionButton onHandleButton={sendName}>
                  질문 받기
                </GetQuestionButton>
              </>
            ))}
        </InputAndButtonBox>
      </MainLogoAndInputWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  ${({ theme }) =>
    theme.mode === 'light'
      ? `background-image: url(${mainBg})`
      : `background-image: url(${darkMainBg})`};
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
  background: ${({ theme }) => theme.colorGrayScale10};
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
