import * as Styles from './styles';

import ArrowLeft from '../../../assets/ArrowLeft';
import LinkButton from '../../LinkButton';

const FormHeader = ({ href = '/', width = 0, isSignIn = false }) => (
  <Styles.FormHeader width={width}>

    <LinkButton href={href}>
      <ArrowLeft />
    </LinkButton>

    {isSignIn ? (
      <div className="progress-container">
        <div className="progress-content" />
      </div>
    ) : null}

  </Styles.FormHeader>
);

export default FormHeader;
