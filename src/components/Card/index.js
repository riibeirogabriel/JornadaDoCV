import * as Styles from './styles';

import Chevron from '../../assets/Chevron';

const Card = ({
  title, description, width = 0, color = 'white',
}) => (
  <Styles.Card width={width} color={color}>
    <div className="card-header">
      <p className="card-title">{title}</p>
      <Chevron />
    </div>
    <p className="card-description">{description}</p>
    <div className="progress-bar">
      <div className="progress-bar-content" />
    </div>
  </Styles.Card>
);

export default Card;
