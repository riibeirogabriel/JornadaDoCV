import * as Styles from './styles';

const Input = ({ label = '', ...rest }) => (
  <Styles.Container>
    <p>{label}</p>
    <Styles.Input {...rest} />
  </Styles.Container>
);

export default Input;
