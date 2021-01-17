import * as Styles from './styles';

const Description = ({ children, ...rest }) => (
  <Styles.Description {...rest}>
    {children}
  </Styles.Description>
);

export default Description;
