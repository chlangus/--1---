/* eslint-disable jsx-a11y/media-has-caption */
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import flowerDance from '../../assets/flower-dance.mp3';
import playPause from '../../assets/play-pause.svg';

export default function AudioButton() {
  const audioRef = useRef();
  const audioPlay = () => {
    // eslint-disable-next-line no-unused-expressions
    audioRef.current.paused
      ? audioRef.current.play()
      : audioRef.current.pause();
  };

  useEffect(() => {
    audioRef.current.volume = 0.2;
  }, []);
  return (
    <Button type="button" onClick={audioPlay}>
      <img src={playPause} alt="playPause" />
      <audio ref={audioRef} src={flowerDance} loop />
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  width: 33px;
  height: 33px;
  bottom: 15px;
  left: 60px;
  border-style: none;
  background-color: var(colorGrayScale20);
  border-radius: 20px;
`;
