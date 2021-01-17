import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Formik, Field } from 'formik';
import StatusCodes from 'http-status-codes';

import Layout from '../../../layout/Public';
import LayoutWrapper from '../../../layout/Form';

import ArrowRight from '../../../assets/ArrowRight';
import Done from '../../../assets/Done';

import FormHeader from '../../../components/Form/FormHeader';
import ButtonBottom from '../../../components/ButtonBottom';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

import FormSignUpStepOne from '../../../components/Form/FormSignUpStepOne';
import FormSignUpStepTwo from '../../../components/Form/FormSignUpStepTwo';
import FormSignUpStepThree from '../../../components/Form/FormSignUpStepThree';

import API from '../../../api';

import { useSnackBarContext } from '../../../context/SnackBar';

const SignUp = () => {
  const router = useRouter();
  const step = router.query?.step ?? 0;

  const { showSnackBar } = useSnackBarContext();

  const handleOnSubmit = async (values) => {
    if (step < 2) {
      router.push({ pathname: '/signup/enter', query: { step: Number(step) + 1 } });
      return null;
    }
    try {
      await API.post('/user', values);
      router.push('/how-can-help');
    } catch (error) {
      if (error.message.includes(StatusCodes.CONFLICT.toString())) {
        const snackBarMessage = 'Usuário existente!';
        showSnackBar('warning', snackBarMessage);
        return null;
      }
      const snackBarMessage = 'Algo não ocorreu como esperado! Tente novamente em instantes';
      showSnackBar('warning', snackBarMessage);
    }
    return null;
  };

  const stepsData = [
    { title: 'Sobre você', description: 'Insira seus dados para começarmos a te conhecer' },
    { title: 'Seu Endereço', description: 'Algumas empresas gostam de saber onde você mora para entender a logística de transporte' },
    { title: 'Seu acesso', description: 'Coloque os dados que você usará para acessar a ferramenta' },
  ];

  const stepData = useMemo(() => stepsData[step], [step]);

  const hrefBack = useMemo(() => {
    const auxStep = Number(step) - 1;
    if (auxStep < 0) return '/signup';
    return { pathname: '/signup/enter', query: { step: auxStep } };
  }, [step]);

  const FormStep = useMemo(() => {
    switch (step) {
      case 0: case '0':
        return <Field component={FormSignUpStepOne} name="User" />;
      case 1: case '1':
        return <Field component={FormSignUpStepTwo} name="Address" />;
      case 2: case '2':
        return <Field component={FormSignUpStepThree} name="Access" />;
      default:
        router.push('/signin');
        return null;
    }
  }, [step]);

  const percent = useMemo(() => (100 / 3) * (Number(step) + 1), [step]);

  return (
    <Layout>
      <LayoutWrapper>

        <FormHeader href={hrefBack} width={percent} />

        <Title className="right">{stepData.title}</Title>
        <Description className="right">{stepData.description}</Description>

        <Formik
          initialValues={{
            user: {
              name: '',
              CPF: '',
              birthDate: '',
              phone: '',
            },
            address: {
              CEP: '',
              state: '',
              city: '',
              neighborhood: '',
              street: '',
              number: '',
            },
            access: {
              email: '',
              password: '',
              repeatPassword: '',
            },
          }}
          onSubmit={handleOnSubmit}
        >
          {FormStep}
        </Formik>

        <ButtonBottom type="submit" form="form-signup">
          <p>{step === 2 || step === '2' ? 'Registrar' : 'Próximo'}</p>
          {step === 2 || step === '2' ? <Done /> : <ArrowRight />}
        </ButtonBottom>

      </LayoutWrapper>
    </Layout>
  );
};

export default SignUp;
