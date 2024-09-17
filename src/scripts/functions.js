import readXlsxFile from "read-excel-file";

export function questSelection(num,image){
    console.log(num + " " + image)
    let file = document.getElementById("file-input-aventura").files[0];
    if(file!=null&&num!=null){
        readXlsxFile(file).then((rows) => {
            rows.forEach((row) =>{
                if(row[0]==image && row[1]==num){
                    document.getElementById("textoMostrar").innerText = row[2];
                }
            })
        })
    }
}

export function tableSelection(num,image){
    let file = document.getElementById("file-input-aventura-tabla").files[0];
    if(file!=null&&num!=null){
        console.log(num + " " + image)
        document.getElementById("tabla-aventuras").innerHTML = "";
            readXlsxFile(file).then((rows) => {
                rows.forEach((row) =>{
                    if(row[0]==image && row[1]==num){
                        document.getElementById("tabla-aventuras").innerHTML += "<li class='tabla-num-selected'>" + row[1] + " " + row[2] + "</li>";
                    }else if(row[0]==image){
                        document.getElementById("tabla-aventuras").innerHTML += "<li>" + row[1] + " " + row[2] + "</li>";
                    }
                })
            })
    }
}

export function randomNumber(max,min){
    return Math.floor((Math.random()*(max-min+1))+min);
}

export function meterMusica(listaMusica){
    const files = document.getElementById("carpetaMusica").files;
    if(files!=null){
        for (let i = 0; i < files.length; i++) {
            let newTrack = {
                url:"/music/"+files[i].webkitRelativePath,
                title:files[i].name,
                tags:[""],
            }

            listaMusica.push(newTrack);
            console.log(listaMusica)
        }
    }
}