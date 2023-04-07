import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import {
  InputContainer,
  InputContent,
  InputError,
  InputErrorContainer,
  InputLabel,
} from '../styled';
import { Input } from './styled';

export interface NormalInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors: string[];
}

const NormalInput = forwardRef<HTMLInputElement, NormalInputProps>(
  ({ label, errors, ...props }, ref) => {
    return (
      <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputContent>
          <Input ref={ref} {...props} />
        </InputContent>
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

export default NormalInput;
