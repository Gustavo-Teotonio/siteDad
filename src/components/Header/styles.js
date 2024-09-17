import styled from "styled-components"

export const HeaderPreco = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding: 40px 0 16px;
   box-shadow: -15px 0.5px 0px #c7c7c7, -5px -5px 10px #f9f9f9

`

export const tituloExclusive = styled.h1`
   font-size: 32px;
`

export const link = styled.a`
    margin-left: 20px;
    &:link{
        color: #0F0F0F;
    }
    &:visited{
        color: #0E0E0E;
    }
    &:hover{
        color: #373737;
        text-decoration: underline
    }
    &:active{
        color: #0E0E0E;
    }
`
export const divLinks = styled.div`
   display: flex;
   position: relative;
   align-items: center;
   
`
export const lista = styled.ul`
    display: flex;
    list-style: none;   
    gap: 20px;
`

export const ItemLista = styled.li`
    &:hover{
        color: #373737;
        text-decoration: underline;
        cursor: pointer;
    }
`

export const Divona = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    gap: 20px;
`