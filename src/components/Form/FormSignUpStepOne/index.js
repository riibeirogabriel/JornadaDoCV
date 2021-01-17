import Input from '../../Input';
import Form from '../index';

const FormSignUpStepOne = ({ form }) => (
  <Form id="form-signup" onSubmit={form.handleSubmit}>
    <Input
      name="user.name"
      value={form.values.user.name}
      label="Nome Completo"
      placeholder="Digite seu nome"
      onChange={form.handleChange}
      required
    />
    <Input
      name="user.CPF"
      value={form.values.user.CPF}
      label="CPF"
      placeholder="000.000.000-00"
      onChange={form.handleChange}
      required
    />
    <Input
      name="user.birthDate"
      value={form.values.user.birthDate}
      label="Data de nascimento"
      type="date"
      onChange={form.handleChange}
      required
    />
    <Input
      name="user.phone"
      value={form.values.user.phone}
      label="Telefone"
      placeholder="(99) 9 9999-9999"
      onChange={form.handleChange}
      required
    />
  </Form>
);

export default FormSignUpStepOne;
