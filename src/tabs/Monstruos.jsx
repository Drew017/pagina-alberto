import { randomNumber } from "../scripts/functions";

export function Monstruos({monstruosArray,setMonstruosArray}){
    const handleClick = (max,min,posicion) =>{
        const updatedMonstruosArray = [...monstruosArray];
        updatedMonstruosArray[posicion] = randomNumber(max,min);
        console.log(updatedMonstruosArray[posicion])
        setMonstruosArray(updatedMonstruosArray)
    }

    return(
        <div className="portada">
            <div className="contenedor-texto">
                <h4 className="texto-informativo">Recuerda leer las páginas 14, 15 y 16 del Libro de Reglas para conocer las reglas oficiales
sobre colocación de Monstruos una vez aparecen en el tablero y de igual forma, ten a mano
las páginas 130 a 135 del Libro de Jugar a Rol para saber cuáles son las “Reglas especiales”
que puedan tener los Monstruos, para resolver cualquier duda sobre los Monstruos que
aparezcan.</h4>
            </div>
            <img src={`monstruos/1/${monstruosArray[0]}.jpg`} className="carta" onClick={() => handleClick(36,1,0)}/>
            <img src={`monstruos/2/${monstruosArray[1]}.jpg`} className="carta" onClick={() => handleClick(36,1,1)}/>
            <img src={`monstruos/3/${monstruosArray[2]}.jpg`} className="carta" onClick={() => handleClick(36,1,2)}/>
            <img src={`monstruos/4/${monstruosArray[3]}.jpg`} className="carta" onClick={() => handleClick(36,1,3)}/>
            <img src={`monstruos/5/${monstruosArray[4]}.jpg`} className="carta" onClick={() => handleClick(36,1,4)}/>
            <img src={`monstruos/6/${monstruosArray[5]}.jpg`} className="carta" onClick={() => handleClick(36,1,5)}/>
            <img src={`monstruos/7/${monstruosArray[6]}.jpg`} className="carta" onClick={() => handleClick(36,1,6)}/>
            <img src={`monstruos/8/${monstruosArray[7]}.jpg`} className="carta" onClick={() => handleClick(36,1,7)}/>
            <img src={`monstruos/9/${monstruosArray[8]}.jpg`} className="carta" onClick={() => handleClick(36,1,8)}/>
            <img src={`monstruos/10/${monstruosArray[9]}.jpg`} className="carta" onClick={() => handleClick(36,1,9)}/>
        </div>
    )
}