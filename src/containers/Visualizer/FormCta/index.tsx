import { useCallback, useMemo, useState } from "react";
import { FormButton } from "../../../components/Buttons";
import FormAddButton from "../../../components/Buttons/FormAddButton";
import { FormButtonOption } from "../../../components/Buttons/FormButton/FormButtonOptions";
import { FormCtaContainer } from "./styled";

type OnSelectHandler = (index: number) => void;
type OnAddButtonHandler = () => void;
type OptionButtonCallback = (index: number) => void;
type MoveButtonHandler = (index: number, direction: number) => void;

interface BaseFormButton {
    label: string;
}

interface FullFormButton extends BaseFormButton {
    options: FormButtonOption[];
}

const formButtons: BaseFormButton[] = [
    {
        label: 'Cancelar'
    },
    {
        label: 'Submeter'
    }
]

const FormCta = () => {
    const [buttons, setButtons] = useState<BaseFormButton[]>(formButtons);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

    const onSelectHandler = useCallback<OnSelectHandler>((index) => {
        setSelectedButtonIndex(index);
    }, [buttons]);

    const onAddButtonHandler = useCallback<OnAddButtonHandler>(() => {
        setButtons((prevState) => [...prevState, { label: 'Novo botão' }]);
    }, [buttons]);

    const onDeleteButtonHandler = useCallback<OptionButtonCallback>((index) => {
        setButtons(prevState => prevState.filter((_, buttonIndex) => buttonIndex !== index));
    }, [setButtons]);

    const onMoveButtonLeftHandler = useCallback<OptionButtonCallback>((index) => {
        onMoveButtonHandler(index, -1);
    }, [buttons]);

    const onMoveButtonRightHandler = useCallback<OptionButtonCallback>((index) => {
        onMoveButtonHandler(index, 1);
    }, [buttons]);

    const onMoveButtonHandler = useCallback<MoveButtonHandler>((index, direction) => {
        const stateCopy = [...buttons];
        [stateCopy[index + direction], stateCopy[index]] = [stateCopy[index], stateCopy[index + direction]];
        setButtons(stateCopy);
        onSelectHandler(index + direction);
    }, [buttons]);

    const updatedButtons: FullFormButton[] = useMemo(() => {
        return buttons.map((button, index) => {
            const options = [];
            const maxButtonIndex = buttons.length - 1;

            if (index < maxButtonIndex) {
                options.push({
                    title: 'Move Right',
                    callback: onMoveButtonRightHandler
                });
            }

            if (index > 0) {
                options.push({
                    title: 'Move Left',
                    callback: onMoveButtonLeftHandler
                });
            }

            options.push({
                title: 'delete',
                callback: onDeleteButtonHandler
            });

            return {
                label: button.label,
                options
            }
        });
    }, [buttons]);

    return (
        <FormCtaContainer>
            {
                updatedButtons.map((button, index) => (
                    <FormButton
                        key={button.label}
                        label={button.label}
                        callback={onSelectHandler}
                        callbackArgs={index}
                        clickOptions={button.options}
                        isSelected={index === selectedButtonIndex}
                    />
                ))
            }
            <FormAddButton
                label="Adicionar"
                callback={onAddButtonHandler}
            />
        </FormCtaContainer>
    )
}

export default FormCta;