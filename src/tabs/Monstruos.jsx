import { randomNumber } from "../scripts/functions";

export function Monstruos({monstruosArray,setMonstruosArray}){
    const handleClick = (max,min,posicion) =>{
        const updatedMonstruosArray = [...monstruosArray];
        let ruta = "";
        if(posicion<9){
            ruta = (posicion + 1)+"/nivel0"+(posicion+1) + " ";
        }else{
            ruta = (posicion + 1)+"/nivel"+(posicion+1) + " ";
        }
        updatedMonstruosArray[posicion] = ruta+"("+randomNumber(max,min)+")";
        console.log(updatedMonstruosArray[posicion])
        setMonstruosArray(updatedMonstruosArray)
    }

    return(
        <div>
            <img src={`monstruos/${monstruosArray[0]}.jpg`} className="carta" onClick={() => handleClick(36,1,0)}/>
            <img src={`monstruos/${monstruosArray[1]}.jpg`} className="carta" onClick={() => handleClick(36,1,1)}/>
            <img src={`monstruos/${monstruosArray[2]}.jpg`} className="carta" onClick={() => handleClick(36,1,2)}/>
            <img src={`monstruos/${monstruosArray[3]}.jpg`} className="carta" onClick={() => handleClick(36,1,3)}/>
            <img src={`monstruos/${monstruosArray[4]}.jpg`} className="carta" onClick={() => handleClick(36,1,4)}/>
            <img src={`monstruos/${monstruosArray[5]}.jpg`} className="carta" onClick={() => handleClick(36,1,5)}/>
            <img src={`monstruos/${monstruosArray[6]}.jpg`} className="carta" onClick={() => handleClick(36,1,6)}/>
            <img src={`monstruos/${monstruosArray[7]}.jpg`} className="carta" onClick={() => handleClick(36,1,7)}/>
            <img src={`monstruos/${monstruosArray[8]}.jpg`} className="carta" onClick={() => handleClick(36,1,8)}/>
            <img src={`monstruos/${monstruosArray[9]}.jpg`} className="carta" onClick={() => handleClick(36,1,9)}/>
        </div>
    )
}