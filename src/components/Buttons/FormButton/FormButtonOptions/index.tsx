import { FC, ReactNode } from "react";
import { FormButtonOptionElement, FormButtonOptionItem, FormButtonOptionsContainer } from "./styled";

export interface FormButtonOption {
    icon?: ReactNode;
    title: string;
    callback: (index: number) => void;
}

interface FormButtonOptionProps {
    options: FormButtonOption[];
    isSelected: boolean;
    index: number;
}

const FormButtonOptions: FC<FormButtonOptionProps> = ({ options, isSelected, index }) => {
    return (
        <FormButtonOptionsContainer isSelected={isSelected}>
            {
                options.map(({title, callback}) => (
                    <FormButtonOptionItem key={title}>
                        <FormButtonOptionElement type="button" onClick={() => callback(index)}>
                            {title}
                        </FormButtonOptionElement>
                    </FormButtonOptionItem>
                ))
            }
        </FormButtonOptionsContainer>
    )
}

export default FormButtonOptions;