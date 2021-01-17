import * as Styles from './styles';

import Google from '../../assets/Google';

import LinkButton from '../LinkButton';
import Title from '../Title';
import Description from '../Description';
import Input from '../Input';
import ButtonBottom from '../ButtonBottom';
import ButtonSignUp from '../ButtonSignUp';

const SignIn = () => {
  const handleOnclick = () => console.log('aqui');

  return (
    <Styles.SignIn>

      <Title>Bem vindo!!</Title>
      <Description>Acesse sua conta para usufruir das nossas funcionalidades</Description>

      <ButtonSignUp color="white">
        <span><Google /></span>
        <p>Entrar com Google</p>
      </ButtonSignUp>

      <Styles.Form>
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" type="password" />
      </Styles.Form>

      <Styles.Footer>
        Não tem uma conta?&nbsp;
        <LinkButton href="/signup">Cadastre-se</LinkButton>
      </Styles.Footer>

      <ButtonBottom className="center" onClick={handleOnclick}>
        <p>Entrar</p>
      </ButtonBottom>

    </Styles.SignIn>
  );
};

export default SignIn;
