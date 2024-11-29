import { ContainerContent, ContainerRows, TitleText } from '@/app/styles/child';
import { CheckBoxStyle } from '@/app/styles/child/checkbox';
import { Label } from '@/app/styles/child/label';
import { Spacer } from '@/app/styles/child/spacer';
import { Checkbox as CB } from 'expo-checkbox';

type Props = {
    labelText: string,
    checkBoxSubText: [...any],
    checkBoxCount: number
}

export function CheckBox({ labelText, checkBoxSubText, checkBoxCount }: Props) {
    return (
        <>
            <Label>
                <TitleText color='black'>{labelText}</TitleText>
            </Label>

            <ContainerRows>
                <ContainerContent>
                    <TitleText color='black' fontSize='14' paddingTop='10'>{checkBoxSubText[0]}</TitleText>
                    <CB style={CheckBoxStyle.checkBox} />

                    <Spacer width='40' />

                    <TitleText color='black' fontSize='14' paddingTop='10'>{checkBoxSubText[1]}</TitleText>
                    <CB style={CheckBoxStyle.checkBox} />
                </ContainerContent>
            </ContainerRows>
        </>
    )
}