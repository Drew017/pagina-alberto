import { randomNumber } from "../scripts/functions";

export function Tesoros({tesorosArray,setTesorosArray}){
    const handleClick = (max,min,posicion) =>{
        const updatedTesorosArray = [...tesorosArray];
        updatedTesorosArray[posicion] = randomNumber(max,min);
        console.log(updatedTesorosArray[posicion])
        setTesorosArray(updatedTesorosArray)
    }

    return(
        <div className="portada">
            <div className="contenedor-texto">
                <h4 className="texto-informativo">Los Aventureros sólo pueden robar una carta de Tesoro cuando así se indique en el Libro de
Aventuras o una vez hayan acabado con todos los Monstruos. Por ejemplo, si son atacados por
una banda de Orcos, recibirán automáticamente un objeto de Tesoro cuando todos los Orcos
estén muertos. Esto significa que tienes que matar a todos los Monstruos antes de conseguir
el tesoro.</h4>
                <h4 className="texto-informativo">El líder (habitualmente el Bárbaro) roba la carta superior del mazo de Tesoro. El jugador decide
entre quedarse con el tesoro o dárselo a uno de los otros jugadores. Sin embargo, el líder debe
repartir siempre por igual todos los tesoros entre todos los Aventureros. Esto significa que
ningún Aventurero podrá recibir un segundo objeto de Tesoro hasta que todos los demás hayan
recibido su primero. Cuando cada Aventurero reciba su tesoro, debe anotarlo.</h4>
                <h4 className="texto-informativo">Recuerda que los Tesoros de color rojo solo son para cuando terminas la aventura tras acabar
                al Villano final y sus secuaces. </h4>
            </div>
            <img src={`tesoros/basic/${tesorosArray[0]}.jpg`} className="carta" onClick={() => handleClick(30,1,0)}/>
            <img src={`tesoros/orcs/${tesorosArray[1]}.jpg`} className="carta" onClick={() => handleClick(54,1,1)}/>
            <img src={`tesoros/pack01/${tesorosArray[2]}.jpg`} className="carta" onClick={() => handleClick(55,1,2)}/>
            <img src={`tesoros/pack02/${tesorosArray[3]}.jpg`} className="carta" onClick={() => handleClick(54,1,3)}/>
            <img src={`tesoros/pack03/${tesorosArray[4]}.jpg`} className="carta" onClick={() => handleClick(54,1,4)}/>
            <img src={`tesoros/pack04/${tesorosArray[5]}.jpg`} className="carta" onClick={() => handleClick(54,1,5)}/>
            <img src={`tesoros/undead/${tesorosArray[6]}.jpg`} className="carta" onClick={() => handleClick(54,1,6)}/>
        </div>
    )
}