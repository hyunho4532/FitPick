import styled from '@emotion/native'
import { Container, Text } from '../base'

export const ContainerRoot = styled(Container)`
    flex: 1;
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