import * as S from "../Section/styles.js"
import Time from "../Time/index.jsx"
import ReturnButton from "../ReturnButton/index.jsx"
import Product from "../Product/index.jsx"
import BotaoListarProdutos from "../BtnListProducts/index.jsx"
import Category from "../Categories/index.jsx"

export default function Section ({title, subtitle, products}) {
    if(products == true){
        return (
            <div>
                <S.Container>
                    <S.Rediv></S.Rediv>
                    <p>{title}</p>
                </S.Container>

                <S.FlashSales>
                    <S.Title>{subtitle}</S.Title>

                    <S.Schedule>
                        <Time title = "Days" time = "03" isLast = "false" ></Time>
                        <Time title = "Hours" time = "23" isLast = "false"></Time>
                        <Time title = "Minutes" time = "19" isLast = "false"></Time>
                        <Time title = "Seconds" time = "56" isLast = {true}></Time>
                    </S.Schedule>

                    <S.DivSetas>
                        <ReturnButton direction = "left"/>
                        <ReturnButton direction = "right"/>
                    </S.DivSetas>
                </S.FlashSales>

                <S.ContainerProducts>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </S.ContainerProducts>

                <BotaoListarProdutos/>
            </div>
        )
    }else{
        return(
            <div>
                <S.Container>
                    <S.Rediv></S.Rediv>
                    <p>{title}</p>
                </S.Container>

                <S.FlashSales>
                <S.Title>{subtitle}</S.Title>

                    <S.DivSetas>
                        <ReturnButton direction = "left"/>
                        <ReturnButton direction = "right"/>
                    </S.DivSetas>
                </S.FlashSales>

                <S.ContainerProducts>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                </S.ContainerProducts>

                <BotaoListarProdutos/>
            </div>
        )
    }
}
