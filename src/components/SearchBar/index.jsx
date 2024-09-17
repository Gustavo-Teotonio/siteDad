import * as S from "./styles.js"
import lupa from "../../assets/pesquisa.svg"

export default function Search(){
    return (
            <form>
            <S.Container>
                <S.SearchBar type = "text" id = "nome" name = "nome" placeholder="What are you looking for?"/>
                <img src={lupa} alt="Lupa" />
            </S.Container>
            </form>
    )
}