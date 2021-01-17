import * as Styles from './styles';

const ButtonBottom = ({ children, ...rest }) => (
  <Styles.ButtonBottom {...rest}>
    {children}
  </Styles.ButtonBottom>
);

export default ButtonBottom;
