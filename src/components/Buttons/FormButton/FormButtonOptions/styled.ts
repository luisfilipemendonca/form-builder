import styled from "styled-components";
import { BaseButton } from "../../styled";
import { SelectedButtonProps } from "../styled";

export const FormButtonOptionsContainer = styled.ul<SelectedButtonProps>`
    position: absolute;
    top: 100%;
    margin-top: 10px;
    border: 1px solid #cbcbcb;
    background: #fff;
    display: ${({isSelected}) => isSelected ? 'flex' : 'none'};
`

export const FormButtonOptionItem = styled.li``;

export const FormButtonOptionElement = styled.button`
    ${BaseButton};

    padding: 0;
`;