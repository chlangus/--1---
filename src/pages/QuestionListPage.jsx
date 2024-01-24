import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import QuestionList from '../components/QuestionList';
import logo from '../assets/logo.svg';
import darkLogo from '../assets/dark-logo.svg';
import AnswerButton from '../components/Buttons/SendQuestionButton';
import ThemeContext from '../contexts/ThemeContext';

function Navbar() {
  const navigateToPage = useNavigate();

  const handleIsUserID = () => {
    const userAccounts = JSON.parse(localStorage.getItem('userAccounts'));
    const firstUserId =
      userAccounts && userAccounts.length > 0 ? userAccounts[0].id : null;
    if (firstUserId === null) {
      // eslint-disable-next-line no-console
      console.log('로컬 스토리지에 아이디가 없습니다');
      navigateToPage(`/`);
    } else {
      navigateToPage(`/post/${firstUserId}/answer`);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleIsUserID();
    }
  };
  const mode = useContext(ThemeContext);

  return (
    <NavWrapper>
      <Nav>
        <Link to="/">
          <LogoImg
            src={mode === 'light' ? logo : darkLogo}
            alt="오픈마인드 로고"
          />
        </Link>
        <div
          onClick={handleIsUserID}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          <AnswerButton>답변하러 가기</AnswerButton>
        </div>
      </Nav>
    </NavWrapper>
  );
}

export default function QuestionListPage() {
  return (
    <>
      <Navbar />
      <QuestionList />
    </>
  );
}

const NavWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 13rem;
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LogoImg = styled.img`
  display: flex;
  width: 14.6rem;
  justify-content: center;
  align-items: center;
`;
