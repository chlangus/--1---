async function fetchSubject() {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-2/subjects/2672/`,
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export default fetchSubject;
