const asyncFunction = (myCallback) => {
    
    setTimeout(() =>{
        console.log("ESte es mi proceso asincrono")

        myCallback()
    },3000)
   
}

console.log("Iniciando proceso")

asyncFunction(()=>{
    console.log("Terminando proceso")

})
