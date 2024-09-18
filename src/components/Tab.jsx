import { useState } from "react"
import { InicioTab } from "../tabs/InicioTab";
import { Asentamientos } from "../tabs/Asentamientos";
import { Aventuras } from "../tabs/Aventuras";
import { Aventureros } from "../tabs/Aventureros";
import { Mazmorras } from "../tabs/Mazmorras";
import { Exploracion } from "../tabs/Exploracion";
import { Eventos } from "../tabs/Eventos";
import { Monstruos } from "../tabs/Monstruos";
import { Tesoros } from "../tabs/Tesoros";
import { Viajes } from "../tabs/Viajes";

export function Tab(){
    const [tab,setTab] = useState(0);
    const [selectedImage,setSelectedImage] = useState(null);
    const [numeroPadreAventuras,setNumeroPadreAventuras] = useState(null);
    const [numeroTablaAventuras,setNumeroTablaAventuras] = useState(null);
    const [eventosArray,setEventosArray] = useState(["base 01 a 19","base 20 a 31","base 30 a 64","llevaajugararol","llevaanomuertos","llevaaorcos"]);
    const [monstruosArray,setMonstruosArray] = useState(["BASE01","BASE02","BASE03","BASE04","BASE05","BASE06","BASE07","BASE08","BASE09","BASE10",]);

    const handleClick = (index) =>{
        setTab(index)
    }

    const tabContent = [
        <InicioTab/>,
        <Aventureros/>,
        <Aventuras selectedImage={selectedImage} setSelectedImage={setSelectedImage} numeroPadre={numeroPadreAventuras} setNumeroPadre={setNumeroPadreAventuras} numeroTablaAventuras={numeroTablaAventuras} setNumeroTablaAventuras={setNumeroTablaAventuras}/>,
        <Mazmorras/>,
        <Exploracion/>,
        <Eventos eventosArray={eventosArray} setEventosArray={setEventosArray}/>,
        <Monstruos monstruosArray={monstruosArray} setMonstruosArray={setMonstruosArray}/>,
        <Tesoros/>,
        <Viajes/>,
        <Asentamientos/>
    ];

    return(
        <div>
            <ul className="tabs">
                <li className={tab === 1 ? "active" : ""} onClick={() => handleClick(1)}>Aventureros</li>
                <li className={tab === 2 ? "active" : ""} onClick={() => handleClick(2)}>Aventuras</li>
                <li className={tab === 3 ? "active" : ""} onClick={() => handleClick(3)}>Mazmorras</li>
                <li className={tab === 4 ? "active" : ""} onClick={() => handleClick(4)}>Exploración, Trampas y Mobiliario</li>
                <li className={tab === 5 ? "active" : ""} onClick={() => handleClick(5)}>Eventos</li>
                <li className={tab === 6 ? "active" : ""} onClick={() => handleClick(6)}>Monstruos</li>
                <li className={tab === 7 ? "active" : ""} onClick={() => handleClick(7)}>Tesoros</li>
                <li className={tab === 8 ? "active" : ""} onClick={() => handleClick(8)}>Viajes</li>
                <li className={tab === 9 ? "active" : ""} onClick={() => handleClick(9)}>Asentamientos</li>
            </ul>
            <div>
                {tabContent[tab]}
            </div>
        </div>
    )
}