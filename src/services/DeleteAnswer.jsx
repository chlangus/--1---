async function deleteAnswer(answerId) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-2/answers/${answerId}/`,
      { method: 'DELETE' },
    );
    console.log('답변 삭제 실행');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default deleteAnswer;
