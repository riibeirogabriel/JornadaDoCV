import { useState } from 'react';
import { useRouter } from 'next/router';

import * as Styles from './styles';

import Onboarding1 from '../../assets/Onboarding1';
import Onboarding2 from '../../assets/Onboarding2';
import Onboarding3 from '../../assets/Onboarding3';
import ArrowRight from '../../assets/ArrowRight';

import LinkButton from '../LinkButton';
import Title from '../Title';
import Description from '../Description';
import ButtonBottom from '../ButtonBottom';

const Onboarding = () => {
  const router = useRouter();

  const [step, setStep] = useState(0);

  const steps = [
    {
      image: Onboarding1,
      title: 'Jornada do CV',
      description: 'Te guiaremos por um caminho de aprendizagem onde você poderá conhecer novas oportunidades',
    },
    {
      image: Onboarding2,
      title: 'Entenda como ter XP',
      description: 'Como ter experiência, se para trabalhar precisamos de experiência? Aqui a gente te mostra como!',
    },
    {
      image: Onboarding3,
      title: 'Exporte um CV lindo',
      description: 'Temos ainda uma ferramenta que gera um CV em pdf para você poder se apresentar melhor para as vagas!',
    },
  ];

  const handleOnclick = () => {
    if (step > 1) router.push('/signin');
    else setStep((value) => value + 1);
  };

  return (
    <Styles.Onboarding>

      <header>
        <LinkButton href="/signin">Login</LinkButton>
      </header>

      <section>
        {steps[step]?.image()}

        <Title>
          {steps[step]?.title}
        </Title>

        <Description>
          {steps[step]?.description}
        </Description>

      </section>

      <Styles.Bullets>
        <div className={step === 0 ? 'selected' : ''} />
        <div className={step === 1 ? 'selected' : ''} />
        <div className={step === 2 ? 'selected' : ''} />
      </Styles.Bullets>

      <ButtonBottom onClick={handleOnclick}>
        <p>Continuar</p>
        <ArrowRight />
      </ButtonBottom>

    </Styles.Onboarding>
  );
};

export default Onboarding;
