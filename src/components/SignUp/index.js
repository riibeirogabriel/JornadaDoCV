import { useRouter } from 'next/router';
import * as Styles from '../SignIn/styles';

import Email from '../../assets/Email';
import Logo from '../../assets/Logo';

import LinkButton from '../LinkButton';
import Title from '../Title';
import Description from '../Description';
import ButtonSignUp from '../ButtonSignUp';

const SignUp = () => {
  const router = useRouter();

  const handleOnclick = () => router.push('/signup/enter');

  return (
    <Styles.Container>

      <div className="logo-container">
        <Logo />
        <Title>Jornada do CV</Title>
        <Description>Cadastre seus dados para usufruir das nossas funcionalidades</Description>
      </div>

      <ButtonSignUp onClick={handleOnclick}>
        <span><Email /></span>
        <p>Cadastrar com email</p>
      </ButtonSignUp>

      <Styles.Footer>
        Já tem uma conta?&nbsp;
        <LinkButton href="/signin">Faça Login</LinkButton>
      </Styles.Footer>

    </Styles.Container>
  );
};

export default SignUp;
