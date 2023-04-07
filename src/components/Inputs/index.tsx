import CheckboxInput from './CheckboxInput';
import NormalInput from './NormalInput';
import Textarea from './TextareaInput';

const Inputs = () => {
  return (
    <>
      <NormalInput
        label="Label do input"
        errors={['Um erro', 'Dois erros']}
        placeholder="Hello there"
      />
      <Textarea
        label="Label do input"
        errors={['Um erro', 'Dois erros']}
        placeholder="Hello there"
      />
      <CheckboxInput label="Um label" errors={['Um erro', 'Dois erros']} />
    </>
  );
};

export default Inputs;
