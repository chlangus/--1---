import { useState } from 'react';
import styled from 'styled-components';
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
      <OrderButton
        $dropDownView={dropDownView}
        onClick={handleClickContainer}
        onBlur={handleBlurContainer}
      >
        <span>{orderList}</span>
        <ArrowIcon
          $dropDownView={dropDownView}
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
  position: relative;
  margin-bottom: 3rem;
  cursor: pointer;
`;

const OrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.2rem;
  margin-bottom: ${({ $dropDownView }) => ($dropDownView ? '0.5rem' : '0')};
  border: ${({ $dropDownView }) =>
    $dropDownView
      ? '0.1rem solid var(--color-grayscale-60)'
      : '0.1rem solid var(--color-grayscale-40)'};
  border-radius: 0.8rem;
  background: var(--color-grayscale-10);

  span {
    color: ${({ $dropDownView }) =>
      $dropDownView
        ? 'var(--color-grayscale-60)'
        : 'var(--color-grayscale-40)'};
    font-size: var(--font-caption1);
    font-weight: var(--weight-medium);
  }
`;

const ArrowIcon = styled.img`
  width: 1.4rem;
`;

const OrderList = styled.ul`
  list-style-type: none;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  padding: 0.4rem 0rem;
  width: 100%;
  color: var(--color-grayscale-50);
  background: var(--color-grayscale-10);
  border-radius: 0.8rem;
  border: 0.1rem solid var(--color-grayscale-30);
  box-shadow: var(--shadow-1pt);
  font-weight: var(--weight-medium);
  font-size: var(--font-caption1);
`;

const OrderItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.6rem;
  cursor: pointer;

  &:hover {
    color: var(--color-blue-50);
  }
`;
