import { ContainerContent, ContainerRows, TitleText } from '@/app/styles/child';
import { Label } from '@/app/styles/child/label';
import { checkBoxList } from '@/shared/list/checkboxList';

type Props = {
    labelText: string,
    checkBoxSubText: [...any]
}

export function CheckBox({ labelText, checkBoxSubText }: Props) {
    return (
        <>
            <Label>
                <TitleText color='black'>{labelText}</TitleText>
            </Label>

            <ContainerRows>
                <ContainerContent>
                    {checkBoxList(checkBoxSubText)}
                </ContainerContent>
            </ContainerRows>
        </>
    )
}