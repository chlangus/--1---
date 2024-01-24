/* eslint-disable jsx-a11y/media-has-caption */
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import QuestionListPage from './pages/QuestionListPage';
import AnswerPage from './pages/AnswerPage';
import QuestionFeedPage from './pages/QuestionFeedPage';
import GlobalStyle from './styles/GlobalStyle';
import NoQuestionFeedPage from './components/NoQuestionFeedPage';
import theme from './styles/Theme';
import ThemeContext from './contexts/ThemeContext';
import folwerDance from './assets/flower-dance.mp3';

function App() {
  const [mode, setMode] = useState('light');
  const handleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme[mode]}>
      <ThemeButton type="button" onClick={handleMode}>
        테마바꾸기
      </ThemeButton>
      <audio src={folwerDance} loop autoPlay />
      <GlobalStyle />
      <ThemeContext.Provider value={mode}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/list" element={<QuestionListPage />} />
            <Route path="/post">
              <Route path=":id/answer" element={<AnswerPage />} />
              <Route path=":id" element={<QuestionFeedPage />} />
              <Route path="no" element={<NoQuestionFeedPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;

const ThemeButton = styled.button`
  position: fixed;
  bottom: 15px;
  left: 15px;
`;
