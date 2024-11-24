import { ContainerIsNotLogin, TitleText } from "../styles/child";

export default function ProfileScreen() {
  return (
    <ContainerIsNotLogin>
      <TitleText>
        진행하려면 현재 로그인을 진행해주세요!
      </TitleText>
    </ContainerIsNotLogin>
  );
}