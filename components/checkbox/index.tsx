import { TitleText } from '@/app/styles/child';
import { Label } from '@/app/styles/child/label';
import { Checkbox as CB } from 'expo-checkbox';

type Props = {
    labelText: string,
}

export function CheckBox({ labelText }: Props) {
    return (
        <>
            <Label>
                <TitleText color='black'>{labelText}</TitleText>
            </Label>
            <CB />
        </>
    )
}