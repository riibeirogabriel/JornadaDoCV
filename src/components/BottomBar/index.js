import * as Styles from './styles';

import PDF from '../../assets/PDFOutline';
import Book from '../../assets/Book';
import User from '../../assets/User';

const BottomBar = ({ children, ...rest }) => (
  <Styles.BottomBar {...rest}>
    <Book className="selected" />
    <User />
    <PDF />
  </Styles.BottomBar>
);

export default BottomBar;
