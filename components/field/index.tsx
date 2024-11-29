import { TitleText } from "@/app/styles/child";
import { TextInputStyle } from "@/app/styles/child/field";
import { Label } from "@/app/styles/child/label";
import { TextInput, View } from "react-native";

type Props = {
    labelText: string,
    placeholder: string
}

export function InputField({ labelText, placeholder }: Props) {
    return (
        <>
            <Label>
                <TitleText color="black">{labelText}</TitleText>
            </Label>
            <TextInput
                style={TextInputStyle.textInput}
                placeholder={placeholder} />
        </>
    )
}