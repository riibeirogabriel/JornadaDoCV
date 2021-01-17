import Input from '../../Input';
import Form from '../index';

const FormSignUpStepThree = ({ form }) => (
  <Form id="form-signup" onSubmit={form.handleSubmit}>
    <Input
      name="access.email"
      value={form.values.access.email}
      type="email"
      label="Email"
      placeholder="email@exemplo.com"
      onChange={form.handleChange}
      required
    />
    <Input
      name="access.password"
      value={form.values.access.password}
      type="password"
      label="Senha"
      placeholder="Digite sua senha"
      onChange={form.handleChange}
      required
    />
    <Input
      name="access.repeatPassword"
      value={form.values.access.repeatPassword}
      type="password"
      label="Repita sua Senha"
      placeholder="Digite sua senha novamente"
      onChange={form.handleChange}
      required
    />
  </Form>
);

export default FormSignUpStepThree;
