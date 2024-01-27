import { atom, useRecoilState } from 'recoil';

const questionsAtom = atom({
  key: 'questionsAtom',
  default: [],
});

export default function useQuestionsAtom() {
  const [questions, setQuestions] = useRecoilState(questionsAtom);
  function setQuestion(newAnswer, questionId) {
    const updatedQuestionIdx = questions.findIndex(q => q.id === questionId);
    const newQuestion = { ...questions[updatedQuestionIdx], answer: newAnswer };

    setQuestions(prev => [
      ...prev.slice(0, updatedQuestionIdx),
      newQuestion,
      ...prev.slice(updatedQuestionIdx + 1),
    ]);
  }

  return [questions, setQuestions, setQuestion];
}
