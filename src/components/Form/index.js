import * as Styles from './styles';

const Form = ({ children, ...rest }) => (
  <Styles.Form {...rest}>
    {children}
  </Styles.Form>
);

export default Form;
