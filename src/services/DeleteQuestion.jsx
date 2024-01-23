async function deleteQuestion(id) {
  const questionId = id;
  console.log('id: ', questionId);
  // test: 3656
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-2/questions/${questionId}/`,
      { method: 'DELETE' },
    );
    console.log('실행');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return null;
  } catch (error) {
    return null;
  }
}

export default deleteQuestion;
