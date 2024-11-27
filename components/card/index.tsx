import { ContainerInFlex, Img, TitleText } from "@/app/styles/child";

type Props = {
    url: any,
    index: number
}

export function IsNotLoginCard({ url, index }: Props) {
    return (
        <ContainerInFlex key={index}>
            <TitleText color="black">{url.title}</TitleText>
            <Img
              width={50}
              height={50}
              source={{
                uri: url.imageUrl
              }}
              marginTop="16"
            />
        </ContainerInFlex>
    )
}