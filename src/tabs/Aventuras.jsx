import { Dado6 } from "../components/Dado6";
import { questSelection,tableSelection } from "../scripts/functions";

export function Aventuras({selectedImage,setSelectedImage,numeroPadre,setNumeroPadre,numeroTablaAventuras,setNumeroTablaAventuras}){

    const images = [
        "Objetivo (1)",
        "Objetivo (2)",
        "Objetivo (3)",
        "Objetivo (4)",
        "Objetivo (5)",
        "Objetivo (6)",
        "Objetivo (7)",
        "Objetivo (8)",
        "Objetivo (9)"
    ]

    const handleClick = (image) =>{
        setSelectedImage(image);
    }

    return(
        <div>
            {selectedImage ? 
            (
                <div className="portada">
                    <div className="imagen-dado">
                        <img src={`aventuras/${selectedImage}.jpg`} className="carta-seleccionada"/>
                        <Dado6 className={"dado"} texto={""} image={selectedImage} numeroPadre={numeroPadre} setNumeroPadre={setNumeroPadre} tag={"aventura"}/>
                        <input type="file" id="file-input-aventura" accept=".xlsx" required onChange={() => questSelection(numeroPadre,selectedImage)}/>
                    </div>
                    <div className="contenedor-texto" id="aventurasExcel">
                        <h4 className="texto-informativo" id='textoMostrar'></h4>
                        <div className="imagen-dado">
                            <h4 className="texto-informativo">TABLA DE MONSTRUOS DE ESTANCIA OBJETIVO:</h4>
                            <input type="file" id="file-input-aventura-tabla" accept=".xlsx" required onChange={() => tableSelection(numeroTablaAventuras,selectedImage)}/>
                            <Dado6 className={"dado"} texto={""} image={selectedImage} numeroPadre={numeroTablaAventuras} setNumeroPadre={setNumeroTablaAventuras} tag={"tabla-aventura"}/>
                        </div>
                        <ul className="tabla-aventuras" id="tabla-aventuras"></ul>
                    </div>
                    
                </div>
            ) 
            : 
            (
                <div className="portada">
                    <div className="contenedor-texto">
                        <h4 className="texto-informativo">
                            En cada aventura, la misión de los Aventureros es encontrar la Estancia Objetivo y completar
                            el Evento especial que tenga lugar allí. La Estancia Objetivo siempre estará defendida por un
                            gran número de Monstruos. Para saber cuántos Monstruos defienden la estancia objetivo, tira
                            los dados en la Tabla de Monstruos de Estancia Objetivo de abajo.
                        </h4>

                        <h4 className="texto-informativo">
                            Esto se hace en la fase de los Monstruos cuando los Aventureros entren en la estancia, en vez
                            de efectuar una Tirada de Eventos. Todos los detalles de los Monstruos están en la Hoja de
                            referencia rápida que hay en el Libro de Reglas y en las Cartas de Evento.
                        </h4>

                        <h4 className="texto-informativo">
                            Ahora, elige una Carta de Estancia Objetivo:
                        </h4>
                    </div>
                {images.map((image,index) => (
                    <img key={index} src={`aventuras/${image}.jpg`} className="carta" onClick={() => handleClick(image)}/>
                ))}
                </div>
            )}
        </div>
    )
}