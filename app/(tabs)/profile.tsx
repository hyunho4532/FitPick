import { ContainerIsNotLogin, Img, TitleText } from "../styles/child";
import data from '../../schema/images.json';
import { IsNotLoginCard } from "@/components/card";
import { CardIsNotLoginBody, CardIsNotLoginHeader } from "../styles/child/card";

export default function ProfileScreen() {
  return (
    /** 해당 컨테이너는 로그인을 진행하지 않았을 때 */
    <ContainerIsNotLogin>
      <CardIsNotLoginHeader backgroundColor="#bfd5e2" borderTopLeft="32" borderTopRight="32">
        <TitleText paddingTop="16" color="gray">진행하려면 로그인을 진행해주세요!</TitleText>
      </CardIsNotLoginHeader>
      <CardIsNotLoginBody backgroundColor="#bfd5e2">
        { data.map((url: any, index: number) => (
              <IsNotLoginCard url={url} index={index} />
        ))}
      </CardIsNotLoginBody>
    </ContainerIsNotLogin>
  );
}