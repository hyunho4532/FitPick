import styled from '@emotion/native'

/**
 * 강제로 간격을 띄운다.
 */
export const Spacer = styled.View<{
    height: string,
    marginTop?: string
}>`
    height: ${(props) => props.height}px;
    margin-top: ${(props) => props.marginTop}px;
`