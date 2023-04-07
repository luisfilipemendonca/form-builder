import { forwardRef, InputHTMLAttributes } from 'react';
import { InputContainer, InputError, InputErrorContainer } from '../styled';
import { InputCheckbox, InputCheckboxLabel } from './styled';

export interface CheckboxInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors: string[];
}

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ label, errors, ...props }, ref) => {
    return (
      <InputContainer>
        <InputCheckboxLabel>
          <InputCheckbox type="checkbox" {...props} ref={ref} />
          {label}
        </InputCheckboxLabel>
        <InputErrorContainer>
          {errors.length > 0 &&
            errors.map((error, index) => (
              <InputError key={index}>{error}</InputError>
            ))}
        </InputErrorContainer>
      </InputContainer>
    );
  }
);

export default CheckboxInput;
