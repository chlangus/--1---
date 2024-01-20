const handleFacebookShareClick = () => {
  const urlToShare =
    'https://65ab6ad0865d585cc1fce89d--openmind-3-2.netlify.app/';
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`,
    '_blank',
  );
};

export default handleFacebookShareClick;
