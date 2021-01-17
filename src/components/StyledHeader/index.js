import * as Styles from './styles';

const StyledHeader = ({ children, ...rest }) => (
  <Styles.StyledHeader {...rest}>
    {children}
  </Styles.StyledHeader>
);

export default StyledHeader;
