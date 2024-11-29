import { ContainerRoot, TitleText } from "@/app/styles/child";
import { Spacer } from "@/app/styles/child/spacer";
import { InputField } from "@/components/field";
import { useRouter, } from "expo-router";
import { useGlobalSearchParams } from "expo-router/build/hooks";

export default function Loginpage() {

    const router = useRouter();
    const { oauth } = useGlobalSearchParams();

    return (
        <ContainerRoot>
            <TitleText 
                fontSize="24"
                color="black"
                paddingTop="16"
                paddingLeft="28"
                align="left">
                FitPack!
            </TitleText>
            
            <TitleText 
                color="black" 
                paddingTop="8" 
                paddingLeft="28"
                align="left">
                신규 가입을 진심으로 환영합니다.
            </TitleText>
            
            <Spacer height="50" marginTop="12" />

            <InputField 
                labelText="이메일" 
                placeholder="이메일을 입력하세요!" />

            <Spacer height="40" />

            <InputField 
                labelText="패스워드" 
                placeholder="패스워드를 입력하세요!" />
        </ContainerRoot>
    )
}