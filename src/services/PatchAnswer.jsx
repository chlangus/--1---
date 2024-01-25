async function patchAnswer(answerId, answer) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-2/answers/${answerId}/`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answer),
      },
    );
    console.log('답변 수정 실행');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default patchAnswer;
