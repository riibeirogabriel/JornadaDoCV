import * as Styles from './styles';

const Title = ({ children, ...ref }) => (
  <Styles.Title {...ref}>
    {children}
  </Styles.Title>
);

export default Title;
