import { CardIsNotLogin, ContainerInFlex, ContainerIsNotLogin, Img, TitleText } from "../styles/child";
import data from '../../schema/images.json';
import { Image } from "react-native";

export default function ProfileScreen() {
  return (
    /** 해당 컨테이너는 로그인을 진행하지 않았을 때 */
    <ContainerIsNotLogin>
      <CardIsNotLogin backgroundColor="#bfd5e2">
        <TitleText paddingTop="16" color="gray">진행하려면 로그인을 진행해주세요!</TitleText>
        { data.map((url: any, index: number) => (
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
        ))}
      </CardIsNotLogin>
    </ContainerIsNotLogin>
  );
}