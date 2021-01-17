import axios from 'axios';

import Input from '../../Input';
import Form from '../index';

const FormSignUpStepTwo = ({ form }) => {
  const handleChangeCEP = async (event) => {
    const { value } = event.target;
    form.setFieldValue('address.CEP', value);
    if (value.length === 8) {
      const { data } = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
      form.setFieldValue('address.state', data?.uf);
      form.setFieldValue('address.city', data?.localidade);
      form.setFieldValue('address.neighborhood', data?.bairro);
      form.setFieldValue('address.street', data?.logradouro);
    }
  };

  return (
    <Form id="form-signup" onSubmit={form.handleSubmit}>
      <Input
        name="address.CEP"
        value={form.values.address.CEP}
        label="CEP"
        placeholder="00.000-000"
        onChange={handleChangeCEP}
        required
      />
      <Input
        name="address.state"
        value={form.values.address.state}
        label="Estado"
        placeholder="Digite o UF do seu estado"
        onChange={form.handleChange}
        required
      />
      <Input
        name="address.city"
        value={form.values.address.city}
        label="Cidade"
        placeholder="Digite sua cidade"
        onChange={form.handleChange}
        required
      />
      <Input
        name="address.neighborhood"
        value={form.values.address.neighborhood}
        label="Bairro"
        placeholder="Digite seu bairro"
        onChange={form.handleChange}
        required
      />
      <Input
        name="address.street"
        value={form.values.address.street}
        label="Rua"
        placeholder="Digite sua rua"
        onChange={form.handleChange}
        required
      />
      <Input
        name="address.number"
        value={form.values.address.number}
        label="Number"
        placeholder="Digite o número"
        onChange={form.handleChange}
        required
      />
    </Form>
  );
};

export default FormSignUpStepTwo;
