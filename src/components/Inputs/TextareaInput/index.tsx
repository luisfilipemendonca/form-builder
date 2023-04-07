import { forwardRef, TextareaHTMLAttributes } from 'react';
import {
  InputContainer,
  InputContent,
  InputError,
  InputErrorContainer,
  InputLabel,
} from '../styled';
import { Textarea } from './styled';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errors: string[];
}

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, errors, ...props }, ref) => {
    return (
      <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputContent>
          <Textarea></Textarea>
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

export default TextareaInput;
