import styled from '@emotion/native'
import { Container, Text } from '../base'

export const ContainerRoot = styled(Container)`
    flex: 1;
`


/** 로그인이 진행되지 않았을 때의 View 속성 */
export const ContainerIsNotLogin = styled(Container)`
    justify-content: center;
    align-items: center;
    display: flex;
`

export const ContainerInFlex = styled(ContainerIsNotLogin)`
    background-color: #d2e2e7;
    flex-direction: row;
`

/** 콘텐츠에 메인 제목 */
export const TitleText = styled(Text)<{
    paddingTop?: string,
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

/** 콘텐츠의 이미지 */
export const Img = styled.Image<{
    width: number,
    height: number,
    marginTop?: string
}>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin-top: ${(props) => props.marginTop}px;
    margin-bottom: 14px;
    margin-left: 14px;
`