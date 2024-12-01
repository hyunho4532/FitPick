import { TitleText } from "@/app/styles/child"
import { CheckBoxStyle } from "@/app/styles/child/checkbox"
import { Spacer } from "@/app/styles/child/spacer"
import Checkbox from "expo-checkbox"
import { Fragment } from "react"

/** 체크박스에 보여지는 리스트들을 저장한다. */
export const checkBoxList = (checkBoxSubText: [...any]) => {
    return checkBoxSubText.map((data: any, index: number) => (
        <Fragment key={index}>
            <TitleText color='black' fontSize='14' paddingTop='10'>{data}</TitleText>
            <Checkbox style={CheckBoxStyle.checkBox} />
            <Spacer width='30' />
        </Fragment>
    ))
}