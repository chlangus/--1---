import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from '../assets/logo.svg';
import AnswerPage from './AnswerPage';

export default function MainPage() {
  const id = '닉네임';

  return (
    <BrowserRouter>
      <Routes>
        <div>
          <img src={logo} alt="logo-imgage" />
          this is main page
        </div>

        <Route path={`/post/${id}/answer`} element={<AnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
