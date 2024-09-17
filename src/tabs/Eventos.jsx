import { randomNumber } from "../scripts/functions"

export function Eventos({eventosArray, setEventosArray}){

    const handleClick = (max,min,posicion) =>{
        const updatedEventosArray = [...eventosArray];
        updatedEventosArray[posicion] = randomNumber(max,min);
        console.log(updatedEventosArray[posicion])
        setEventosArray(updatedEventosArray)
    }

    return(
        <div>
            <img src={`eventos/${eventosArray[0]}.jpg`} className="carta" onClick={() => handleClick(19,1,0)}/>
            <img src={`eventos/${eventosArray[1]}.jpg`} className="carta" onClick={() => handleClick(31,20,1)}/>
            <img src={`eventos/${eventosArray[2]}.jpg`} className="carta" onClick={() => handleClick(64,30,2)}/>
        </div>
    )
}