import * as S from "./styles"

export default function promotionBar(){
    return (
        <S.PromotionBar>
            <S.Text>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <S.ShopNow href="#">Show now</S.ShopNow>
            </S.Text> 
        <S.Dropdown name = "" id = "">
            <S.DropdownOption value="ingles">English</S.DropdownOption>
            <S.DropdownOption value="portuguese">Portuguese</S.DropdownOption>
        </S.Dropdown>
        </S.PromotionBar>
    )
}