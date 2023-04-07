import NormalInput from './NormalInput';

const Inputs = () => {
  return (
    <NormalInput
      label="Label do input"
      errors={['Um erro', 'Dois erros']}
      placeholder="Hello there"
    />
  );
};

export default Inputs;
