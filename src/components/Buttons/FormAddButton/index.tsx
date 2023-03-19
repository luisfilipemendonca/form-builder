import { FC } from "react";
import {FormAddButtonElement } from "./styled";

interface FormAddButtonProps {
    callback: () => void;
    label: string;
}

const FormAddButton: FC<FormAddButtonProps> = ({label, callback}) => {
    return (
        <FormAddButtonElement
            type="button"
            onClick={() => callback()}
        >
            {label}
        </FormAddButtonElement>
    )
};

export default FormAddButton;