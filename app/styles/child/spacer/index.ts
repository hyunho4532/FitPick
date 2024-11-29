import styled from '@emotion/native'

/**
 * 강제로 간격을 띄운다.
 */
export const Spacer = styled.View<{
    width?: string,
    height?: string,
    marginTop?: string
}>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin-top: ${(props) => props.marginTop}px;
`