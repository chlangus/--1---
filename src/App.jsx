import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuestionListPage from './pages/QuestionListPage';
import AnswerPage from './pages/AnswerPage';
import QuestionFeedPage from './pages/QuestionFeedPage';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const id = '닉네임';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<QuestionListPage />} />
          <Route path={`/post/${id}/answer`} element={<AnswerPage />} />
          <Route path={`/post/${id}`} element={<QuestionFeedPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
