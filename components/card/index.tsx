import { Img, TitleText } from "@/app/styles/child";
import { CardInFlex, CardIsNotLoginBody, CardIsNotLoginContent } from "@/app/styles/child/card";
import { Link } from "expo-router";

type Props = {
    url: any,
    index: number
}

export function IsNotLoginCard({ url, index }: Props) {
    return (
        <CardIsNotLoginBody backgroundColor="#e2e2e2">
            <CardInFlex>
                <Link push href={url.redirect}>
                    <CardIsNotLoginContent>
                        <TitleText color="black">{url.title}</TitleText>
                        <Img width={32} height={32}
                            source={{
                                uri: url.imageUrl
                            }}
                            marginTop="16" />
                    </CardIsNotLoginContent>
                </Link>
            </CardInFlex>
        </CardIsNotLoginBody>
    )
}