import styled from '@emotion/native'
import { Card, Container, Text } from '../base'

export const ContainerRoot = styled(Container)`
    flex: 1;
`

/** 로그인이 진행되지 않았을 때의 Card 속성 */
export const CardIsNotLogin = styled(Card)`
    width: 320px;
    height: 140px;
    background-color: #FEF9F2;
    border-radius: 24px;
`

/** 로그인이 진행되지 않았을 때의 View 속성 */
export const ContainerIsNotLogin = styled(Container)`
    justify-content: center;
    align-items: center;
`

export const TitleText = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`