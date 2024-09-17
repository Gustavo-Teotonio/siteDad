import * as S from "./styles.js"
import Camera from "../../assets/Category/Camera.svg"
import CellPhone from "../../assets/Category/CellPhone.svg"
import Computer from "../../assets/Category/Computer.svg"
import Gamepad from "../../assets/Category/Gamepad.svg"
import Headphone from "../../assets/Category/Headphone.svg"
import SmartWatch from "../../assets/Category/SmartWatch.svg"

export default function Category(){
    return(
        <S.DivCategoria>
            <img src={Camera} alt="Camera" />
            <p>Phones</p>
        </S.DivCategoria>
    )
}