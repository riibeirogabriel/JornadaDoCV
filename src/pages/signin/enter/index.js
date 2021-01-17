import StatusCodes from 'http-status-codes';
import React, { useState } from 'react';

import Layout from '../../../layout/Public';
import LayoutWrapper from '../../../layout/Form';

import FormHeader from '../../../components/Form/FormHeader';
import ButtonBottom from '../../../components/ButtonBottom';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
import Input from '../../../components/Input';
import Form from '../../../components/Form';

import API from '../../../api';

import { useSnackBarContext } from '../../../context/SnackBar';

const SingIn = () => {
  const { showSnackBar } = useSnackBarContext();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const authCredentials = { user, password };
    try {
      await API.post('/auth', authCredentials);
    } catch (error) {
      if (error.message.includes(StatusCodes.UNAUTHORIZED.toString())) {
        const snackBarMessage = 'Usuário e/ou senha inválida. Confira se seus dados estão corretos e tente novamente';
        showSnackBar('warning', snackBarMessage);
        return;
      }
      const snackBarMessage = 'Algo não ocorreu como esperado! Tente novamente em instantes';
      showSnackBar('error', snackBarMessage);
    }
  };

  return (
    <Layout>
      <LayoutWrapper>
        <FormHeader href="/signin" isSignIn />

        <Title className="right">Seu acesso</Title>
        <Description className="right">Coloque os dados que você usará para acessar a ferramenta</Description>

        <Form id="form-signin" onSubmit={handleOnSubmit}>
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

        <ButtonBottom type="submit" form="form-signin" className="center">
          <p>Entrar</p>
        </ButtonBottom>

      </LayoutWrapper>
    </Layout>
  );
};

export default SingIn;
