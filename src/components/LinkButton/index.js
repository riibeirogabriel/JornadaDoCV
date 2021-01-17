import Link from 'next/link';
import * as Styles from './styles';

const LinkButton = ({ href = '/', children, ...rest }) => (
  <Link href={href}>
    <Styles.LinkButton {...rest}>
      {children}
    </Styles.LinkButton>
  </Link>
);

export default LinkButton;
