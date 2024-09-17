/*Usando Css Modular
import styles from "./compHeader.module.css"

export default function compHeader(){
    return (
            <header className={styles.compHeader}>
               <p>Header</p>
            </header>
            )
}
*/

//Usando Styled Component
import * as S from "./styles.js"
import Search from "../SearchBar"
import Coracao from "../../assets/Wishlist.svg"
import Carrinho from "../../assets/carrinho.svg"

export default function CompHeader(){
   return (
      <S.HeaderPreco>
         <S.tituloExclusive>Exclusive</S.tituloExclusive>
         <S.divLinks>
            <nav>
               <S.lista>
                  <S.ItemLista>Home</S.ItemLista>
                  <S.ItemLista>Contact</S.ItemLista>
                  <S.ItemLista>About</S.ItemLista>
                  <S.ItemLista>Sign up</S.ItemLista>
               </S.lista>
            </nav>
         </S.divLinks>

         <S.Divona>
            <Search/>
            <img src= {Coracao} alt="Coração" />
            <img src= {Carrinho} alt="Carrinho" />
         </S.Divona>

      </S.HeaderPreco>
   )
   }