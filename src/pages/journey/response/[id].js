import { useRouter } from 'next/router';

import Layout from '../../../layout/Private';

import ArrowRight from '../../../assets/ArrowRight';

import SearchSuccess from '../../../assets/SearchSuccess';
import SearchIncentive from '../../../assets/SearchIncentive';
import OpportunitySuccess from '../../../assets/OpportunitySuccess';
import OpportunityIncentive from '../../../assets/OpportunityIncentive';
import SkillsSuccess from '../../../assets/SkillsSuccess';
import SkillsIncentive from '../../../assets/SkillsIncentive';
import ExperiencesSuccess from '../../../assets/ExperiencesSuccess';
import ExperiencesIncentive from '../../../assets/ExperiencesIncentive';

import ButtonBottom from '../../../components/ButtonBottom';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

const journeyData = {
  search: {
    success: {
      title: 'Uau! Podemos te chamar de caça-vagas?',
      description: 'Você conhece muitos canais e isso aumenta a chance de recrutadores te encontrarem.',
      image: SearchSuccess,
    },
    incentive: {
      title: 'Está faltando pouco!',
      description: 'Existem várias formas de buscar uma oportunidades. Ao final da sua jornada, você vai saber um pouco mais sobre essa etapa.',
      image: SearchIncentive,
    },
  },
  opportunity: {
    success: {
      title: 'Nossa! Você sabe como dar match com uma vaga',
      description: 'Quanto mais a vaga combina com você e suas habilidades, mais chances de o recrutador também perceber isso',
      image: OpportunitySuccess,
    },
    incentive: {
      title: 'Conheça você onde você quer estar!',
      description: 'Saber se você, a empresa e a vaga combinam é extremamente importante, se liga nas dicas no final para melhorar essa etapa.',
      image: OpportunityIncentive,
    },
  },
  skills: {
    success: {
      title: 'Isso aí! Você sabe bem o que colocar no seu currículo',
      description: 'Recrutadores apreciam muito quem sabe explicar as próprias competências.',
      image: SkillsSuccess,
    },
    incentive: {
      title: 'Que tal pensar um pouco mais?',
      description: 'Com ajuda de outras pessoas e fazendo pesquisas, é mais fácil entender como descrever suas experiências. Ao final da sua jornada, você vai saber um pouco mais sobre essa etapa.',
      image: SkillsIncentive,
    },
  },
  experiences: {
    success: {
      title: 'Que demais, mestre das experiências!',
      description: 'Assim vai ficar fácil enriquecer seu currículo.',
      image: ExperiencesSuccess,
    },
    incentive: {
      title: 'Trabalhar sem experiência é possível!',
      description: 'Existem muitas formas de obter experiência não formal em qualquer área. Na próxima etapa você receberá algumas dicas sobre essa parte.',
      image: ExperiencesIncentive,
    },
  },
};

const Response = () => {
  const router = useRouter();
  const { id, status } = router.query;

  const handleOnclick = () => router.push('/home');

  return (
    <Layout>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 32,
      }}
      >
        <div style={{ paddingBottom: 32 }}>
          {journeyData[id][status]?.image()}
        </div>
        <Title style={{ width: '100%', textAlign: 'center' }}>{journeyData[id][status]?.title}</Title>
        <Description style={{ width: '100%', textAlign: 'center', paddingBottom: 32 }}>{journeyData[id][status]?.description}</Description>
      </div>

      <ButtonBottom onClick={handleOnclick}>
        <p>Continuar</p>
        <ArrowRight />
      </ButtonBottom>

    </Layout>
  );
};

export default Response;
