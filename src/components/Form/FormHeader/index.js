import * as Styles from './styles';

import ArrowLeft from '../../../assets/ArrowLeft';
import LinkButton from '../../LinkButton';

const FormHeader = ({ href = '/', width = 0, withoutProgress = false }) => (
  <Styles.FormHeader width={width}>

    <LinkButton href={href}>
      <ArrowLeft />
    </LinkButton>

    {withoutProgress ? null : (
      <div className="progress-container">
        <div className="progress-content" />
      </div>
    )}

  </Styles.FormHeader>
);

export default FormHeader;
