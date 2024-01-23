import { useState } from 'react';
import styled from 'styled-components';
import kebabImg from '../../assets/more-icon.svg';
import EditBoxModal from '../EditBoxModal';

export default function KebabButton({ editMode, setEditMode }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <EditButton id="kebab" onClick={() => setIsOpenModal(!isOpenModal)} />
      {isOpenModal && (
        <EditBoxModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      )}
    </>
  );
}

const EditButton = styled.button`
  all: unset;
  cursor: pointer;

  background: url(${kebabImg}) no-repeat;
  width: 26px;
  height: 26px;
`;
