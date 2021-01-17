import Link from 'next/link';

import * as Styles from './styles';

import PDF from '../../assets/PDF';
import Qualify from '../../assets/Qualify';

import Title from '../Title';
import Description from '../Description';

const HowCanHelp = () => (
  <Styles.Container>
    <Title>Como podemos te ajudar?</Title>

    <Link href="/">
      <div className="item">
        <PDF />
        <Description>Só quero o PDF do meu CV</Description>
      </div>
    </Link>

    <Link href="/">
      <div className="item">
        <Qualify />
        <Description>Quero me qualificar mais</Description>
      </div>
    </Link>

  </Styles.Container>
);

export default HowCanHelp;
