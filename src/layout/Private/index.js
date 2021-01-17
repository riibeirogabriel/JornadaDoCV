// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

import * as Styles from './styles';

const Private = ({ children }) => {
  // const router = useRouter();

  // const isUserLogged = getIdToken();

  // useEffect(() => {
  //   if (!isUserLogged) router.push('/admin/login');
  // }, [isUserLogged]);

  // if (!isUserLogged) return null;
  console.log('');
  return (
    <Styles.Private>{children}</Styles.Private>
  );
};

export default Private;
