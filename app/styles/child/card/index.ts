import styled from '@emotion/native'
import { Card } from '../../base'


/** 로그인이 진행되지 않았을 때의 Card 속성 (Header) */
export const CardIsNotLoginHeader = styled(Card)<{
    backgroundColor: string,
    borderTopLeft?: string,
    borderTopRight?: string,
}>`
    width: 320px;
    height: 60px;
    background-color: ${(props) => props.backgroundColor};
    border-top-left-radius: ${(props) => props.borderTopLeft};
    border-top-right-radius: ${(props) => props.borderTopRight};
`

/** 로그인이 진행되지 않았을 때의 Card 속성 (Body) */
export const CardIsNotLoginBody = styled(Card)<{
    backgroundColor?: string,
    borderTopLeft?: string,
    borderTopRight?: string,
}>`
    width: 320px;
    height: 80px;
    background-color: ${(props) => props.backgroundColor};
    border-top-left-radius: ${(props) => props.borderTopLeft};
    border-top-right-radius: ${(props) => props.borderTopRight};
`

export const CardInFlex = styled(CardIsNotLoginBody)`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
`