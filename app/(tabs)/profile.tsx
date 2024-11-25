import { CardIsNotLogin, ContainerIsNotLogin, TitleText } from "../styles/child";

export default function ProfileScreen() {
  return (
    <ContainerIsNotLogin>
      <CardIsNotLogin>
        <TitleText>진행하려면 로그인을 진행해주세요!</TitleText>
      </CardIsNotLogin>
    </ContainerIsNotLogin>
  );
}