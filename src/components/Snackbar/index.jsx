import React, {
  forwardRef, useEffect, useImperativeHandle, useState,
} from 'react';

import * as Styles from './styles';

const SnackBar = (props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [time, setTime] = useState(5000);

  useEffect(() => {
    if (showSnackbar) {
      setTimeout(() => setShowSnackbar(false), time);
    }
  }, [showSnackbar]);

  const showMessage = (_type = '', _message = '', _time = 5000) => {
    setType(_type);
    setMessage(_message);
    if (_time < 1000) setTime(1000);
    else setTime(_time);
    setShowSnackbar(true);
  };

  useImperativeHandle(ref, () => ({ showMessage }));

  return (
    <Styles.Snackbar ref={ref} className={showSnackbar ? 'show' : ''} time={(time - 500) / 1000}>
      <div className={`container ${type}`}>
        {message}
      </div>
    </Styles.Snackbar>
  );
};

export default forwardRef(SnackBar);
