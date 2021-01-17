import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getIdToken } from '../../utils/storage';

import * as Styles from './styles';

const Private = ({ children }) => {
  const router = useRouter();

  const isUserLogged = getIdToken();

  useEffect(() => {
    if (!isUserLogged) router.push('/signin');
  }, [isUserLogged]);

  if (!isUserLogged) return null;
  return (
    <Styles.Private>{children}</Styles.Private>
  );
};

export default Private;
