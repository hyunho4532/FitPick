import { ContainerIsNotLogin, ContainerRoot, TitleText } from "@/app/styles/child";
import { useRouter, } from "expo-router";
import { useGlobalSearchParams } from "expo-router/build/hooks";

export default function Loginpage() {

    const router = useRouter();
    const { oauth } = useGlobalSearchParams();

    return (
        <ContainerRoot>
            <TitleText color="black" paddingTop="16">FitPack!</TitleText>
            <TitleText color="black" paddingTop="8">신규 가입을 환영합니다.</TitleText>
        </ContainerRoot>
    )
}