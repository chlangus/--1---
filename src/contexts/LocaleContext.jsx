import { createContext } from 'react';

const userAccounts = JSON.parse(localStorage.getItem('userAccounts')); // 로컬스토리지 데이터 불러와서 데이터형식 변환

export const LocaleContext = createContext();

export default function LocaleContextProvider({ children }) {
  return (
    <LocaleContext.Provider value={userAccounts}>
      {children}
    </LocaleContext.Provider>
  );
}
