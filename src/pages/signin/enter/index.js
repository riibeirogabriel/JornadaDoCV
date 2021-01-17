import Layout from '../../../layout/Public';

import FormHeader from '../../../components/Form/FormHeader';
import ButtonBottom from '../../../components/ButtonBottom';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
import Input from '../../../components/Input';
import Form from '../../../components/Form';

const Login = () => {
  const handleOnSubmit = () => console.log('aqui');

  return (
    <Layout>
      <FormHeader href="/signin" />

      <Title className="right">Seu acesso</Title>
      <Description className="right">Coloque os dados que você usará para acessar a ferramenta</Description>

      <Form id="form-signin" onSubmit={handleOnSubmit}>
        <Input label="Email" type="email" placeholder="email@exemplo.com" required />
        <Input label="Senha" type="password" placeholder="Digite sua senha" required />
      </Form>

      <ButtonBottom type="submit" form="form-signin" className="center">
        <p>Entrar</p>
      </ButtonBottom>

    </Layout>
  );
};

export default Login;
