import styled from '@emotion/native'
import { Card, Container, Text } from '../base'

export const ContainerRoot = styled(Container)`
    flex: 1;
`

/** 로그인이 진행되지 않았을 때의 Card 속성 */
export const CardIsNotLogin = styled(Card)<{
    backgroundColor: string
}>`
    width: 320px;
    height: 140px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 24px;
`

/** 로그인이 진행되지 않았을 때의 View 속성 */
export const ContainerIsNotLogin = styled(Container)`
    justify-content: center;
    align-items: center;
`

/** 콘텐츠에 메인 제목 */
export const TitleText = styled(Text)<{
    paddingTop: string,
    color: string
}>`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding-top: ${(props) => props.paddingTop}px;
    color: ${(props) => props.color};
`

/** 콘텐츠의 서브 제목 */
export const SubText = styled(Text)<{

}>`

`