async function deleteQuestion(id) {
  const questionId = id;
  // test: 3631
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-2/questions/${questionId}/`,
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return null;
  } catch (error) {
    return null;
  }
}

export default deleteQuestion;
