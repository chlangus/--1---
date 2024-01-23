async function putAnswer(id, answer) {
  const answerId = id;
  console.log('id: ', answerId);
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-2/answers/${answerId}/`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer }),
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

export default putAnswer;
