import { questSelection, randomNumber, tableSelection } from "../scripts/functions";
import { useEffect } from "react";

export function Dado6({className,texto,image,numeroPadre,setNumeroPadre,tag}){

    const handleClick = () =>{
        let nuevoNumero = randomNumber(6,1);
        setNumeroPadre(nuevoNumero);
    }

    useEffect(() => {
        console.log(tag)
        if (numeroPadre !== null && image != null && tag == "aventura") {
            questSelection(numeroPadre, image);
        }else if (numeroPadre !== null && image != null && tag == "tabla-aventura") {
            tableSelection(numeroPadre, image);
        }
    }, [numeroPadre, image]);

    return(
        <div className={className} onClick={handleClick}>
            <h2>{texto}</h2>
            <img src="/dados/d12.svg"/>
            <h1>{numeroPadre}</h1>
        </div>
    )
}