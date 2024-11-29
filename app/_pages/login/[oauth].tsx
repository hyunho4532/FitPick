import { ContainerIsNotLogin, ContainerRoot, TitleText } from "@/app/styles/child";
import { TextInputStyle } from "@/app/styles/child/field";
import { InputField } from "@/components/field";
import { useRouter, } from "expo-router";
import { useGlobalSearchParams } from "expo-router/build/hooks";
import { TextInput } from "react-native";

export default function Loginpage() {

    const router = useRouter();
    const { oauth } = useGlobalSearchParams();

    return (
        <ContainerRoot>
            <TitleText color="black" paddingTop="16">FitPack!</TitleText>
            <TitleText color="black" paddingTop="8">신규 가입을 환영합니다.</TitleText>
            <InputField labelText="이메일" />
            <InputField labelText="패스워드" />
        </ContainerRoot>
    )
}