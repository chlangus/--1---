import styled from 'styled-components';
import logo from '../assets/logo.svg';
import NameInput from '../components/NameInput';
import QuestionButton from '../components/QuestionButton';

export default function MainPage() {
  const PageWrapper = styled.div`
    margin: 0;
    width: 1200px;
    height: 627px;
    display: flex;
    flex-direction: column;
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

  return (
    <PageWrapper>
      <Img src={logo} alt="logo-imgage" />
      <InputAndButtonBox>
        <NameInput />
        <QuestionButton />
      </InputAndButtonBox>
    </PageWrapper>
  );
}
