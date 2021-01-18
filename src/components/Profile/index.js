import * as Styles from './styles';

import StyledHeader from '../StyledHeader';
import Title from '../Title';
import Card from '../Card';

const Profile = () => (
  <Styles.Profile>
    <StyledHeader className="header">
      <div className="header-content">
        <img src="https://camo.githubusercontent.com/3b0b4a70cca6db753a80c800a637862730600ffe65e3a02cfe75df74d046014f/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f64656661756c742d757365722d69636f6e2f64656661756c742d757365722d69636f6e2d342e6a7067" alt="Profile" />
        <div className="welcome">
          <p>Olá, Rosana</p>
          <p>Seja bem-vinda!</p>
        </div>
      </div>
    </StyledHeader>

    <Styles.ProfileContent>
      <Title className="right">Sua Jornada</Title>

      <div className="card-container">
        <Card
          id="search"
          title="A Busca"
          description="A busca de vagas dentro da sua área é o primeiro passo."
          width={20}
          color="#EE4197"
        />

        <Card
          id="opportunity"
          title="A Vaga"
          description="Avalie se a vaga é boa para você."
          width={20}
          color="#1DD3CD"
        />

        <Card
          id="skills"
          title="As Competências"
          description="Entenda o que você já sabe e o que você precisa saber."
          width={20}
          color="#E6B107"
        />

        <Card
          id="experiences"
          title="As Experiências"
          description="Experiências não são apenas trabalho de carteira assinada."
          width={20}
          color="#19B6E6"
        />
      </div>

    </Styles.ProfileContent>

  </Styles.Profile>
);

export default Profile;
