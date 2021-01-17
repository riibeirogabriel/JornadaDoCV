import React, { useState } from 'react';
import StatusCodes from 'http-status-codes';
import Layout from '../../../layout/Public';

import FormHeader from '../../../components/Form/FormHeader';
import ButtonBottom from '../../../components/ButtonBottom';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
import Input from '../../../components/Input';
import Form from '../../../components/Form';
import API from '../../../api';
import { useSnackBarContext } from '../../../context/SnackBar';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { showSnackBar } = useSnackBarContext();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const authCredentials = { user, password };

    try {
      const result = await API.post('/user', authCredentials);
      console.log(result.data);
    } catch (error) {
      if (error.message.includes(StatusCodes.CONFLICT.toString())) {
        const snackBarMessage = 'Usuário existente!';
        showSnackBar('warning', snackBarMessage);

        return;
      }
      const snackBarMessage = 'Algo não ocorreu como esperado! Tente novamente em instantes';
      showSnackBar('warning', snackBarMessage);
    }
  };

  return (
    <Layout>
      <FormHeader href="/signup" />

      <Title className="right">Seu acesso</Title>
      <Description className="right">Coloque os dados que você usará para acessar a ferramenta</Description>

      <Form id="form-signup" onSubmit={handleOnSubmit}>
        <Input
          label="Email"
          type="email"
          onChange={({ target: { value } }) => setUser(value)}
          placeholder="email@exemplo.com"
          required
        />
        <Input
          label="Senha"
          type="password"
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="Digite sua senha"
          required
        />
      </Form>

      <ButtonBottom type="submit" form="form-signup" className="center">
        <p>Entrar</p>
      </ButtonBottom>

    </Layout>
  );
};

export default Login;
