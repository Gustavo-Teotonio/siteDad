import * as S from "./styles.js"

export default function Time({title, time, isLast}){
    if(isLast == true){
        return (
            <S.Time>
                <S.Text>
                    <h3>{title}</h3>
                    <h1>{time}</h1>
                </S.Text>
            </S.Time>
        )
    }else{
        return (
            <S.Time>
                <S.Text>
                    <h3>{title}</h3>
                    <h1>{time}</h1>
                </S.Text>
                <S.Dots>
                    <ul>
                        <S.Item></S.Item>
                        <S.Item></S.Item>
                    </ul>
                </S.Dots>
            </S.Time>
        )
    }
    

}