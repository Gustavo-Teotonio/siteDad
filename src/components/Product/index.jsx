import * as S from "../Product/styles.js"
import Teclado from "../../assets/Teclado.svg"
import Monitor from "../../assets/Monitor.svg"
import Controle from "../../assets/Controle.svg"
import Cadeira from "../../assets/Cadeira.svg"
import CincoEstrelas from "../../assets/Cinco Estrelas.svg"
import Olho from "../../assets/Olho.svg"
import Coracao from "../../assets/Coracao.svg"

export default function Product({promotion}){
    //if (promotion == true){
        return (
            <S.Divonica>
                <S.DivImagem>
                    <S.PercentagePromotion>
                            -30%
                    </S.PercentagePromotion>

                    <S.ImageWrapper>
                        <S.Image src={Teclado} alt="Teclado" />
                    </S.ImageWrapper>      

                    <S.DivOlhoCoracao>
                        <img src={Olho} alt="Olho"/>                 
                        <img src={Coracao} alt="Coracao"/>                 
                    </S.DivOlhoCoracao>

                </S.DivImagem>

                <S.DivElementosTextuais>
                    <h3>HAVIT HV-GP2 Gamepad</h3>

                    <S.DivPrecos>
                        <S.Preco>$120</S.Preco>
                        <S.PrecoDesconto>$160</S.PrecoDesconto>
                    </S.DivPrecos>
                    
                    <S.DivAvaliacao>
                        <img src = {CincoEstrelas} alt = "Cinco estrelas"></img>
                        <p>(88)</p>
                    </S.DivAvaliacao>
                </S.DivElementosTextuais>
            </S.Divonica>
        )
    //}else{
        // return(

        // )
    //}
}
