import { TitleText } from "@/app/styles/child";
import { Label } from "@/app/styles/child/label";

type Props = {
    labelText: string
}

export function InputField({ labelText }: Props) {
    return (
        <Label>
            <TitleText color="black">{labelText}</TitleText>
        </Label>

    )
}