import { useState } from 'react';
import styled, { css } from 'styled-components';
import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';

export default function DropDownButton({
  orderType,
  orderList,
  handleButtonClick,
}) {
  const [dropDownView, setDropDownView] = useState(false);
  const delayTime = 200;

  const handleClickContainer = () => {
    setDropDownView(!dropDownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropDownView(false);
    }, delayTime);
  };

  return (
    <OrderBox $dropDownView={dropDownView} onBlur={handleBlurContainer}>
      <OrderButton $dropDownView={dropDownView} onClick={handleClickContainer}>
        {orderList}
        <ArrowIcon
          dropDownView={dropDownView}
          src={dropDownView ? arrowUpIcon : arrowDownIcon}
          alt="화살표"
        />
      </OrderButton>
      {dropDownView && (
        <OrderList $dropDownView={dropDownView}>
          {orderType.map(buttonName => (
            <OrderItem
              key={buttonName}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </OrderItem>
          ))}
        </OrderList>
      )}
    </OrderBox>
  );
}

const OrderBox = styled.div`
  ${({ dropDownView }) =>
    dropDownView
      ? css`
          /* 오픈 상태일 때 스타일 */
          display: inline-flex;
          position: relative;
          border-radius: 0.8rem;
          border: 0.1rem solid var(--color-gray-60);
          background: var(--color-gray-10);
        `
      : css`
        /* 닫힌 상태일 때 스타일 */
        display: inline-flex;
        position: relative;
        border-radius solid var(--color-gray-40);
        background: var(--color-gray-10);
      `}
`;

const OrderButton = styled.button`
  ${({ dropDownView }) =>
    dropDownView
      ? css`
          /* 오픈 상태일 때 스타일 */
          display: flex;
          padding: 0.8rem 1.2rem;
          justify-content: center;
          align-items: center;
          gap: 0.4rem;
          align-self: stretch;
          border-radius: 0.8rem;
          border: 1px solid var(--color-grayscale-60);
          background: var(--color-grayscale-10);
          color: var(--color-grayscale-60);
          font-feature-settings:
            'clig' off,
            'liga' off;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 18px;
        `
      : css`
          /* 닫힌 상태일 때 스타일 */
          display: flex;
padding: 8px 12px;
justify-content: center;
align-items: center;
gap: 4px;
align-self: stretch;
border-radius: 8px;
border: 1px solid var(--color-grayscale-60);
background: var(--color-grayscale-10;
        `}
`;

const ArrowIcon = styled.img`
  width: 1.4rem;
`;

const OrderList = styled.ul`
  /* 리스트 오픈 상태일 때 스타일 */
`;

const OrderItem = styled.li``;
