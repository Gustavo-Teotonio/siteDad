import styled from "styled-components"

export const DivCategoria = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: 170px;
    height: 145px;
    border: 1px black solid;
    border-radius: 4px;
    cursor: pointer; 

    :hover{
        background-color: #DB4444;
    }
    
    img {
        width: 100px;
        height: auto;
    }

    p {
        margin-top: 8px; 
    }
`;