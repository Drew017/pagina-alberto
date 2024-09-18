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