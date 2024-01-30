/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './IdSelectButton';
import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';

export default function NicknamesListButton({ nicknames }) {
  const [dropDownView, setDropDownView] = useState(false);
  const handleClickContainer = () => {
    setDropDownView(!dropDownView);
  };
  const currentUser = JSON.parse(localStorage.getItem('id'));
  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropDownView(false);
    }, 200);
  };

  const selectNickname = id => {
    localStorage.setItem('id', JSON.stringify(id)); // 현재 유저 정보 저장
  };

  return (
    <>
      <DropDownButton
        $dropDownView={dropDownView}
        onClick={handleClickContainer}
        onBlur={handleBlurContainer}
      >
        {nicknames.map(
          nickname => nickname.id === currentUser && nickname.name,
        )}
        <ArrowIcon
          $dropDownView={dropDownView}
          src={dropDownView ? arrowUpIcon : arrowDownIcon}
          alt="화살표"
        />
      </DropDownButton>
      {dropDownView && (
        <IdWrapper>
          {nicknames.map(nickname => (
            <Id key={nickname.id} onClick={() => selectNickname(nickname.id)}>
              {nickname.name}
              <Span>받은 질문: {nickname.questionCount}</Span>
            </Id>
          ))}
        </IdWrapper>
      )}
    </>
  );
}

const ArrowIcon = styled.img`
  width: 1.4rem;
`;

const IdWrapper = styled.ul`
  right: 30px;
  left: 30px;
  top: 110px;
  max-height: 140px;
  overflow-y: scroll;
  list-style-type: none;
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 0.4rem 0rem;
  color: ${({ theme }) => theme.colorGrayScale50};
  background: ${({ theme }) => theme.colorGrayScale10};
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colorGrayScale30};
  box-shadow: var(--shadow-1pt);
  font-weight: var(--weight-medium);
  font-size: var(--font-caption1);
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 7px solid ${({ theme }) => theme.colorGrayScale40};
  }
`;

const Span = styled.span`
  font-size: 10px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colorGrayScale40};
`;
const Id = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.6rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colorBlue50};
  }
`;

const DropDownButton = styled(Button)`
  color: ${({ $dropDownView, theme }) =>
    $dropDownView ? theme.colorGrayScale60 : theme.colorGrayScale40};
  margin-bottom: ${({ $dropDownView }) => ($dropDownView ? '0.5rem' : '0')};
  border: ${({ $dropDownView, theme }) =>
    $dropDownView
      ? `0.1rem solid ${theme.colorGrayScale60}`
      : `0.1rem solid ${theme.colorGrayScale40}`};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colorGrayScale10};
`;
