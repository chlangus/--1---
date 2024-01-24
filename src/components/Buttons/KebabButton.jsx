import { useContext, useState } from 'react';
import styled from 'styled-components';
import kebabImg from '../../assets/more-icon.svg';
import EditBoxModal from '../EditBoxModal';
import ThemeContext from '../../contexts/ThemeContext';
import darkKebabImg from '../../assets/dark-more-icon.svg';

export default function KebabButton({ editMode, setEditMode }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const mode = useContext(ThemeContext);

  return (
    <>
      <EditButton type="button" onClick={() => setIsOpenModal(pre => !pre)}>
        <img src={mode === 'light' ? kebabImg : darkKebabImg} alt="show-more" />
      </EditButton>

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
