import { useRouter } from 'next/router';
import Link from 'next/link';

import * as Styles from './styles';

import PDF from '../../assets/PDFOutline';
import Book from '../../assets/Book';
import User from '../../assets/User';

const BottomBar = ({ children, ...rest }) => {
  const router = useRouter();

  return (
    <Styles.BottomBar {...rest}>
      <Link href="/home">
        <Book className={router.pathname === '/home' ? 'selected' : ''} />
      </Link>
      <Link href="/profile">
        <User className={router.pathname === '/profile' ? 'selected' : ''} />
      </Link>
      <Link href="/curriculum">
        <PDF className={router.pathname === '/curriculum' ? 'selected' : ''} />
      </Link>
    </Styles.BottomBar>
  );
};

export default BottomBar;
