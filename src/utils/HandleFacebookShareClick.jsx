const handleFacebookShareClick = () => {
  const urlToShare =
    'https://65ab8799f20cd1758e7673df--openmind-3-2.netlify.app/';
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`,
    '_blank',
  );
};

export default handleFacebookShareClick;
