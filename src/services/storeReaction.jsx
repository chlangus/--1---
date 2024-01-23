export default async function storeReaction({ id, type }) {
  const response = await fetch(
    `https://openmind-api.vercel.app/3-2/questions/${id}/reaction/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type }),
    },
  );
  const result = await response.json();

  return result;
}
