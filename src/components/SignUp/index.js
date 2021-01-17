import * as Styles from './styles';

import Email from '../../assets/Email';
import Google from '../../assets/Google';

import LinkButton from '../LinkButton';
import Title from '../Title';
import Description from '../Description';
import ButtonSignUp from '../ButtonSignUp';

const SignUp = () => (
  <Styles.SignUp>

    <Title>Bem vindo!!</Title>
    <Description>Cadastre seus dados para usufruir das nossas funcionalidades</Description>

    <ButtonSignUp color="white">
      <span><Google /></span>
      <p>Cadastrar com Google</p>
    </ButtonSignUp>

    <ButtonSignUp>
      <span><Email /></span>
      <p>Cadastrar com email</p>
    </ButtonSignUp>

    <Styles.Footer>
      Já tem uma conta?&nbsp;
      <LinkButton href="/signin">Faça Login</LinkButton>
    </Styles.Footer>

  </Styles.SignUp>
);

export default SignUp;
