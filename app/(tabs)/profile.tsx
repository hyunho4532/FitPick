import { ContainerIsNotLogin, Img, TitleText } from "../styles/child";
import data from '../../schema/images.json';
import { IsNotLoginCard } from "@/components/card";
import { CardIsNotLoginBody, CardIsNotLoginHeader } from "../styles/child/card";

export default function ProfileScreen() {
  return (
    /** 해당 컨테이너는 로그인을 진행하지 않았을 때 */
    <ContainerIsNotLogin>
      <CardIsNotLoginHeader backgroundColor="#d1d1d1" borderTopLeft="32" borderTopRight="32">
        <TitleText paddingTop="16" color="black">진행하려면 로그인을 진행해주세요!</TitleText>
      </CardIsNotLoginHeader>
      { data.map((url: any, index: number) => (
        <IsNotLoginCard key={index} url={url} index={index} />
      ))}
    </ContainerIsNotLogin>
  );
}