async function postAnswer(questionId, answer) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-2/questions/${questionId}/answers/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answer),
      },
    );
    console.log('답변 달기');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default postAnswer;
