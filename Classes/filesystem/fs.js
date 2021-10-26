const fs = require("fs")


const leerArchivo = (path)=> {
    
    fs.readFile(path,(error, data)=>{

        if (error) {
            console.log.error("No se pudo leer:", error);
        } else {
            console.log("El contenido es:", data.toString());
    
        }
    })
}

const writeFile = (path,newData)=> {
    
    fs.writeFile(path,newData,(error)=>{

        if (error) {
            console.log.error("No se pudo escribir:", error);
        } else {
            console.log("Información agregada");
    
        }
    })
}


const borrarfile = (path)=> {
    
    fs.unlink(path,(error)=>{

        if (error) {
            console.error("No se pudo borrar:", error);
        } else {
            console.log("El archivo se borro");
    
        }
    })
}


const crearDirectorio = (path)=> {
    
    fs.mkdir(path,(error)=>{

        if (error) {
            console.error("No se pudo borrar:", error);
        } else {
            console.log("El directorio se creo");
    
        }
    })
}

const allInclusive = (option,path,newData ) =>{
    switch(option){
        case 0:
            leerArchivo(path)
            break;
        case 1:
            writeFile(path,newData)
            break;
        case 2:
            borrarfile(path)
            break;
        case 3:
            crearDirectorio(path)
            break;
    }

}

let path = `${__dirname}/hola.txt`
let newData = "Probando 1,2,3"
let path3 = `${__dirname}/adios.txt`
let pathCreateDir = `${__dirname}/newDirectory`
let path1 =`${__dirname}/hola.txt`
let pathAll = `${__dirname}/nuevo-prueba2.txt`
let pathAllDir = `${__dirname}/newDirAll`
let newDataAll ="nuevo"
allInclusive(0,path)