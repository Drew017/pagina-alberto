import { useEffect,useState } from "react";
import { generarAventureros } from "../scripts/functions"

export function Aventureros(){
    const [aventureros, setAventureros] = useState([]);

    useEffect(() => {
        const aventurerosGenerados = generarAventureros();
        setAventureros(aventurerosGenerados);
    }, []);
    return(
        <div className="portada">
            <div className="contenedor-texto">
                <h4 className="texto-informativo">Al pinchar sobre cada Aventurero, se genera la hoja de personaje para comenzar con Nivel de
Batalla 1 más su libro de reglas y tarjetas. Con imprimir la primera página del PDF llamada
“Hoja de Control de Aventureros” es suficiente para jugar. El resto del pdf es para que se pueda
consultar en cualquier momento durante la partida.</h4>
                <h4 className="texto-informativo">Al crear un grupo de Aventureros es conveniente que exista cierto equilibrio. El equipo de
                jugadores para una partida básica está pensado para un Bárbaro, Enano, Elfo y Hechicero.</h4>
            </div>
            {aventureros.map((aventurero, index) => (
        <a
          key={index}
          href={aventurero.pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={aventurero.img} className="icono-aventurero"/>
        </a>
      ))}
        </div>
    )
}