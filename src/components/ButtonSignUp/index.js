import * as Styles from './styles';

const ButtonSignUp = ({ children, ...rest }) => (
  <Styles.ButtonSignUp {...rest}>
    {children}
  </Styles.ButtonSignUp>
);

export default ButtonSignUp;
