import * as S from "./styles.js"
import ReturnImage from "../../assets/ReturnImage.svg"


export default function ReturnButton({direction}){
    if(direction == "left"){
        return (
            <S.ImagemButton src={ReturnImage} alt = "Seta Esquerda" style={{ transform: 'rotate(270deg)' }}/>
        )
    }else if(direction == "right"){
        return (
            <S.ImagemButton src={ReturnImage} alt="Seta Direita" style={{ transform: 'rotate(90deg)' }}/>
        )
    }else if(direction == "top"){
        return (
            <S.ImagemButton src={ReturnImage} alt="Seta Direita" style={{ transform: 'rotate(90deg)' }}/>
        )
    }
}