import { Img, TitleText } from "@/app/styles/child";
import { CardInFlex, CardIsNotLoginBody } from "@/app/styles/child/card";

type Props = {
    url: any,
    index: number
}

export function IsNotLoginCard({ url, index }: Props) {
    return (
        <CardIsNotLoginBody backgroundColor="#e2e2e2">
            <CardInFlex>
                <TitleText color="black">{url.title}</TitleText>
                <Img
                width={32}
                height={32}
                source={{
                    uri: url.imageUrl
                }}
                marginTop="16"
                />
            </CardInFlex>
        </CardIsNotLoginBody>
    )
}