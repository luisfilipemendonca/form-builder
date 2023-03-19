import FormButtonOptions, { FormButtonOption } from "./FormButtonOptions";
import { FormButtonContainer, FormButtonElement } from "./styled";

interface FormButtonProps<T> {
    callbackArgs: T;
    callback: (args: T) => void;
    label: string;
    clickOptions: FormButtonOption[];
    isSelected: boolean;
}

const FormButton = <T extends unknown>({
        callbackArgs,
        callback,
        label,
        clickOptions,
        isSelected
    }: FormButtonProps<T>) => {

    return (
        <FormButtonContainer>
            <FormButtonElement
                type="button"
                onClick={() => callback(callbackArgs)}
                isSelected={isSelected}
            >
                {label}
            </FormButtonElement>
            <FormButtonOptions
                options={clickOptions}
                isSelected={isSelected}
                index={callbackArgs as number}
            />
        </FormButtonContainer>
    )
};

export default FormButton;