import styled from "styled-components";
import { BaseButton } from "../styled";

export interface SelectedButtonProps {
    isSelected: boolean;
}

export const FormButtonContainer = styled.div`
    position: relative;
`;

export const FormButtonElement = styled.button<SelectedButtonProps>`
    ${BaseButton};

    border: 1px solid ${({isSelected}) => isSelected ? '#00cc00' : '#cbcbcb'};
`;