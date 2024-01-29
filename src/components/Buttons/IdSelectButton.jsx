import styled from 'styled-components';

export default function IdSelectButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: ${({ theme }) => theme.colorBrown10};
  color: ${({ theme }) => theme.colorBrown40};
  border: 1px solid ${({ theme }) => theme.colorBrown40};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
