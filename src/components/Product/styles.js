import styled from "styled-components"

export const Divonica = styled.div`
    width: 270px;
    height: 350px;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
`

export const DivImagem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 270px;
    height: 250px;
    background-color: #F5F5F5;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
`;

export const Image = styled.img`
    width: 172px;
    height: 152px;
`;

export const DivOlhoCoracao = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px 32px 0px 0px;
`

export const PercentagePromotion = styled.div`
    width: 55px;
    height: 26px;
    font-size: 12px;
    position: relative;
    top: 12px;
    left: 12px;
    border-radius: 4px;
    padding: 4px 12px;
    background-color: #DB4444;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivElementosTextuais = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 12px;
`

export const DivPrecos = styled.div`
    display: flex;
    font-size: 16px;
    gap: 1vw;
`

export const Preco = styled.p`
    color: #DB4444;
`

export const PrecoDesconto = styled.p`
    text-decoration: line-through;
    color: #0f0f0f;
    opacity: 50%;
`

export const DivAvaliacao = styled.div`
    display: flex;
    gap: 1vw;
`