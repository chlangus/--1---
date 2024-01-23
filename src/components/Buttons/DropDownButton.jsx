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
    <OrderBox dropDownView={dropDownView} onBlur={handleBlurContainer}>
      <OrderButton dropDownView={dropDownView} onClick={handleClickContainer}>
        {orderList}
        <ArrowIcon
          dropDownView={dropDownView}
          src={dropDownView ? arrowUpIcon : arrowDownIcon}
          alt="화살표"
        />
      </OrderButton>
      {dropDownView && (
        <OrderList dropDownView={dropDownView}>
          {orderType.map(buttonName => (
            <OrderItem key={buttonName} onClick={handleButtonClick}>
              {buttonName}
            </OrderItem>
          ))}
        </OrderList>
      )}
    </OrderBox>
  );
}

const OrderBox = styled.div``;

const OrderButton = styled.button``;

const OrderList = styled.ul``;

const OrderItem = styled.li``;

const ArrowIcon = styled.img``;
