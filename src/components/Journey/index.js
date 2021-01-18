/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import * as Styles from './styles';

import Layout from '../../layout/Public';
import LayoutWrapper from '../../layout/Form';

import ArrowRight from '../../assets/ArrowRight';

import FormHeader from '../Form/FormHeader';
import Title from '../Title';
import Description from '../Description';
import ButtonBottom from '../ButtonBottom';

const journeyData = {
  search: {
    title: 'A Busca',
    description: 'Buscar as vagas certas nos lugares certos faz uma enorme diferença na hora de conseguir o seu próximo job!',
    question: 'Quais canais você já utilizou para procurar vagas?',
    answers: [
      'Sites de vagas ou da empresa',
      'Linkedin',
      'Redes sociais',
      'Empresas de estágio ',
      'Agências de emprego',
      'Indicação',
    ],
  },
  opportunity: {
    title: 'A Vaga',
    description: 'Entender se a empresa/vaga é compatível com o seu perfil é um passo essencial para evitar o desperdício de tempo e expectativa.',
    question: 'O que você já fez para entender se a empresa/vaga combinam com seu perfil?',
    answers: [
      'Pesquisei sobre a empresa',
      'Identifiquei se a empresa tem o perfil que eu gosto',
      'Analisei os requisitos da vaga',
      'Verifiquei se cumpro a maioria desses requisitos',
      'Busquei avaliações sobre a empresa',
      'Entrei em contato com recrutadores',
      'Adaptei meu currículo aos requisitos da vaga',
    ],
  },
  skills: {
    title: 'As Competências',
    description: 'As principais competências observadas em um currículo são as técnicas (o que você aprende através da educação formal ou informal) e comportamentais (atitudes e hábitos que têm a ver com sua personalidade).',
    question: 'Digite suas competências técnicas ou comportamentais que têm relação com a área de trabalho desejada.',
  },
  experiences: {
    title: 'As Experiências',
    description: 'Nem só de CLT vive o candidato! Existem várias outras formas de você conquistar a famosa experiência sem ter experiência.',
    question: 'Quais experiências fora do mercado de trabalho formal você já vivenciou que podem ser relacionadas à sua área?',
    answers: [
      'Programas de capacitação oferecidos por empresas',
      'Cursos ou treinamentos',
      'Palestras ou eventos',
      'Trabalho voluntário',
      'Projetos (mesmo que pessoais)',
      'Maratonas ou hackathons',
      'Empreendedorismo/freelance',
      'Pesquisa ou estudo',
      'Trabalho informal',
    ],
  },
};

const Journey = ({ id }) => {
  const handleOnclick = () => console.log('aqui');

  return (
    <Layout>
      <LayoutWrapper>
        <FormHeader href="/home" withoutProgress />
        <Styles.Journey>

          <Title className="right">{journeyData[id]?.title}</Title>
          <Description className="right">{journeyData[id]?.description}</Description>

          <Description className="right question-journey">{journeyData[id]?.question}</Description>

          {journeyData[id]?.answers?.map((answer, index) => (
            <label className="checkbox-container" key={index}>
              {answer}
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          ))}

          <ButtonBottom onClick={handleOnclick}>
            <p>Continuar</p>
            <ArrowRight />
          </ButtonBottom>

        </Styles.Journey>
      </LayoutWrapper>
    </Layout>
  );
};

export default Journey;
