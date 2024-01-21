import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import arrowRight from '../assets/arrow-right.svg';

function Navbar() {
  return (
    <NavWrapper>
      <Nav>
        <Link to="/">
          <LogoImg src={logo} alt="오픈마인드 로고" />
        </Link>
        <Link to="/">
          <AnswerButton type="button">
            <span>답변하러 가기</span>
            <ArrowRightIcon src={arrowRight} alt="오른쪽화살표아이콘" />
          </AnswerButton>
        </Link>
      </Nav>
    </NavWrapper>
  );
}

function QuestionListPage() {
  return <Navbar />;
}

const NavWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 13rem;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
`;

const LogoImg = styled.img`
  display: flex;
  width: 14.6rem;
  justify-content: center;
  align-items: center;
`;

const AnswerButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2.4rem;
  gap: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-brown-40);
  background-color: var(--color-brown-10);
  color: var(--color-brown-40);
  font-size: var(--font-body3);
  font-weight: var(--weight-regular);
  text-decoration: none;
  cursor: pointer;
`;

const ArrowRightIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export default QuestionListPage;
