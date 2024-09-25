import { randomNumber } from "../scripts/functions"

export function Eventos({eventosArray, setEventosArray}){

    const handleClick = (max,min,posicion) =>{
        const updatedEventosArray = [...eventosArray];
        updatedEventosArray[posicion] = randomNumber(max,min);
        console.log(updatedEventosArray[posicion])
        setEventosArray(updatedEventosArray)
    }

    return(
        <div className="portada">
            <div className="contenedor-texto">
                <h4 className="texto-informativo">¿Cuándo robar una Carta de Evento?</h4>
                <h4 className="texto-informativo">1.- Si el Hechicero saca un 1 en la Fase de Poder, surge un Evento (Carta Azul). Roba una carta
al azar de ese mazo y sigue las instrucciones. Puede que a veces encuentres ayuda para tu
misión ¡aunque lo más probable es que encuentres más Monstruos!</h4>
                <h4 className="texto-informativo">Si la carta Evento es un evento especial (tiene la letra E en las esquinas superiores) resuélvela
inmediatamente, tal como se describe en la carta. Si la carta Evento es un grupo de Monstruos
(tiene la letra M en las esquinas superiores), ¡los Aventureros han sido atacados! Mira en la
carta cuantos Monstruos son, toma las miniaturas necesarias y coloca los Monstruos en el
tablero según las reglas (pág. 14 del Libro de Reglas).</h4>
                <h4 className="texto-informativo">2.- Si los Aventureros entran en una nueva Estancia Subterráneo durante la Fase de
Aventureros, entonces debes empezar la Fase de Monstruos robando una carta del mazo de
Evento (Carta Azul) para ver qué hay dentro. Si la carta revela Monstruos, siempre se colocan
dentro de la estancia, aunque los Aventureros estén separados en distintas secciones de
tablero. Si no existe suficiente espacio en la estancia para todos los Monstruos, los que queden
deben situarse en las secciones de tablero adyacentes. En Estancias Objetivos no se debe
robar Carta de Evento al entrar.</h4>
                <h4 className="texto-informativo">Los Nuevos Monstruos que son colocados en la Fase de Monstruos, han terminado el turno al
posicionarse. No pueden mover o combatir hasta la Fase de Monstruos del siguiente turno. Los
Monstruos que aparecieron en la Fase de Poder del turno en juego pueden atacar en la Fase
de Monstruos del mismo turno.</h4>
                <h4 className="texto-informativo">¿Cansado de los Monstruos del juego base? La pestaña de “Monstruos” es tu solución.</h4>
            </div>
            <img src={`eventos/basico/${eventosArray[0]}.jpg`} className="carta" onClick={() => handleClick(19,1,0)}/>
            <img src={`eventos/basico/${eventosArray[1]}.jpg`} className="carta" onClick={() => handleClick(31,20,1)}/>
            <img src={`eventos/basico/${eventosArray[2]}.jpg`} className="carta" onClick={() => handleClick(64,30,2)}/>
            <img src={`eventos/jugararol/${eventosArray[3]}.jpg`} className="carta" onClick={() => handleClick(43,1,3)}/>
            <img src={`eventos/orcos/${eventosArray[4]}.jpg`} className="carta" onClick={() => handleClick(34,1,4)}/>
            <img src={`eventos/nomuertos/${eventosArray[5]}.jpg`} className="carta" onClick={() => handleClick(28,1,5)}/>
        </div>
    )
}