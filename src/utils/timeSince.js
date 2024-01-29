function timeSince(date) {
  const createdAt = new Date(date);
  const now = new Date();
  const timeDiff = now - createdAt;

  const weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
  return `${weeksDiff}주전`;
}

export default timeSince;
