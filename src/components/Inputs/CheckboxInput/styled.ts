import styled from 'styled-components';
import { Input } from '../NormalInput/styled';

export const InputCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const InputCheckbox = styled(Input)`
  width: unset;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #cbcbcb;
  padding: 0;
  position: relative;
  margin-right: 5px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:checked::before {
    background: green;
  }
`;
