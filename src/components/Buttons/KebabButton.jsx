import { useState } from 'react';
import styled from 'styled-components';
import kebabImg from '../../assets/more-icon.svg';
import EditBoxModal from '../EditBoxModal';

export default function KebabButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <EditButton
        type="button"
        onClick={e => {
          e.stopPropagation();
          return setIsOpenModal(!isOpenModal);
        }}
      >
        <img src={kebabImg} alt="show-more" />
      </EditButton>
      {isOpenModal && (
        <EditBoxModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  );
}

const EditButton = styled.button`
  all: unset;
  cursor: pointer;
`;
