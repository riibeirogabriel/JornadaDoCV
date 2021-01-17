import React, { useContext, useRef } from 'react';

import SnackBar from '../components/Snackbar';

const SnackBarContext = React.createContext({});

export const SnackBarContextProvider = ({ children }) => {
  const SnackBarRef = useRef();

  const showSnackBar = (type = '', message = '', time = 5000) => {
    if (SnackBarRef?.current) { SnackBarRef?.current?.showMessage(type, message, time); }
  };

  return (
    <SnackBarContext.Provider value={{ showSnackBar }}>
      {children}
      <SnackBar ref={SnackBarRef} />
    </SnackBarContext.Provider>
  );
};

export const useSnackBarContext = () => {
  const snackBarContext = useContext(SnackBarContext);
  return snackBarContext;
};
