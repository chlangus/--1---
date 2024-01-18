import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuestionListPage from './pages/QuestionListPage';
import AnswerPage from './pages/AnswerPage';
import QuestionFeedPage from './pages/QuestionFeedPage';

function App() {
  const id = '닉네임';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<QuestionListPage />} />
        <Route path={`/post/${id}/answer`} element={<AnswerPage />} />
        <Route path={`/post/${id}`} element={<QuestionFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
