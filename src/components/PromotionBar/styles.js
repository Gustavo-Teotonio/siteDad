import styled from "styled-components"

export const PromotionBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;   
    position: relative;
    height: 48px;
    background-color: #0F0F0F;
    color: #FAFAFA; 
`

export const Text = styled.p`
    font-size: 14px;
`

export const ShopNow = styled.a`
    margin-left: 20px;
    &:link{
        color: #FAFAFA;
    }
    &:visited{
        color:  #E6E6E6;
    }
    &:hover{
        color: red;
    }
    &:active{
        color: red;
    }
`

export const Dropdown = styled.select`
    position: absolute;
    right: 10vw;
    background: none;
    color: #FAFAFA;
    border: none;
    cursor: pointer;

    &:focus{
        outline: none;
    }
`

export const DropdownOption = styled.option`
    color: #FAFAFA;
    background: #0f0f0f;
`