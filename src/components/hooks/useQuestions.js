import { atom, useRecoilState } from 'recoil';
import { produce } from 'immer';

const questionsAtom = atom({
  key: 'questionsAtom',
  default: [],
});

export default function useQuestionsAtom() {
  const [questions, setQuestions] = useRecoilState(questionsAtom);
  function setQuestion(newQuestion, questionId) {
    const updatedQuestionIdx = questions.findIndex(
      q => q.id === questionId, // 새로들어온 질문의 id와 같다면 updateQuestionIdx에 인덱스 저장
    );
    // 여기서 splice하고~ 새로운 배열에 넣어줘서 디스트러팅하고~ 요런것드를 immer쓰면 훨씬 깔끔해집니당
    // const newQuestions = questions.splice(updatedQuestionIdx, 1, newQuestion); // splice는 새로운 참조를 반환하지 않습니다!
    // setQuestions([...newQuestions]);
    // const newQuestions = questions.splice(updatedQuestionIdx, 1, newQuestion);//  수정하기 생각좀 해보겠습니다..
  }

  return [questions, setQuestions, setQuestion];
}
//   function updateQuestion(newQuestion) {
//     const updatedQuestionIdx = questions.findIndex(
//       q => q.id === newQuestion.id, // 새로들어온 질문의 id와 같다면 updateQuestionIdx에 인덱스 저장
//     );
//     // 여기서 splice하고~ 새로운 배열에 넣어줘서 디스트러팅하고~ 요런것드를 immer쓰면 훨씬 깔끔해집니당
//     // const newQuestions = questions.splice(updatedQuestionIdx, 1, newQuestion); // splice는 새로운 참조를 반환하지 않습니다!
//     // setQuestions([...newQuestions]);
//     setQuestions(prev => [
//       ...prev.slice(0, updatedQuestionIdx),
//       newQuestion,
//       ...prev.slice(updatedQuestionIdx),
//     ]);
//   }
// [
//     {
//       "content": "저도 배고파염라대왕",
//       "answer": {
//         "content": "ㅇㅇ",
//         "isRejected": true,
//       }
// ]
