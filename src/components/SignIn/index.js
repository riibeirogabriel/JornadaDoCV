import { useRouter } from 'next/router';

import * as Styles from './styles';

import Logo from '../../assets/Logo';
import Email from '../../assets/Email';

import LinkButton from '../LinkButton';
import Title from '../Title';
import Description from '../Description';
import ButtonSignUp from '../ButtonSignUp';

const SignIn = () => {
  const router = useRouter();

  const handleOnclick = () => router.push('/signin/enter');

  return (
    <Styles.Container>

      <div className="logo-container">
        <Logo />
        <Title>Jornada do CV</Title>
        <Description>Acesse sua conta para usufruir das nossas funcionalidades</Description>
      </div>

      <ButtonSignUp onClick={handleOnclick}>
        <span><Email /></span>
        <p>Entrar com email</p>
      </ButtonSignUp>

      <Styles.Footer>
        Não tem uma conta?&nbsp;
        <LinkButton href="/signup">Cadastre-se</LinkButton>
      </Styles.Footer>
    </Styles.Container>
  );
};

export default SignIn;
