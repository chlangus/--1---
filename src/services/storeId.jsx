export default async function storeId(name) {
  const response = await fetch(
    'https://openmind-api.vercel.app/3-2/subjects/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
      }),
    },
  );

  const result = await response.json();
  return result;
}
