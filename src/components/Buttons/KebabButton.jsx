import { useState } from 'react';
import styled from 'styled-components';
import kebabImg from '../../assets/more-icon.svg';

export default function KebabButton() {
  const [pop, setPop] = useState(false);

  return (
    <Button type="button" onClick={() => setPop(!pop)}>
      <img src={kebabImg} alt="show-more" />
    </Button>
  );
}

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;
