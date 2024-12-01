import { ContainerContent, ContainerRows, TitleText } from '@/app/styles/child';
import { CheckBoxStyle } from '@/app/styles/child/checkbox';
import { Label } from '@/app/styles/child/label';
import { Spacer } from '@/app/styles/child/spacer';
import { Checkbox as CB } from 'expo-checkbox';

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
                    { checkBoxSubText.map((data: any) => (
                        <>
                            <TitleText color='black' fontSize='14' paddingTop='10'>{data}</TitleText>
                            <CB style={CheckBoxStyle.checkBox} />
                            <Spacer width='30' />
                        </>
                    )) }

                </ContainerContent>
            </ContainerRows>
        </>
    )
}