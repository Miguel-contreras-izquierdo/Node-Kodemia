let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };


let  frappeOrden = {
    fruit: stocks.fruits[3],
    liquid: stocks.liquid[1],
    holder: stocks.holder[2],
    toppings: stocks.toppings[1],
  }
  
  console.log(frappeOrden)
  
  
  const order = (frappeOrden)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
        console.log(`Tú orden esta empezando`)
        resolve(frappeOrden);
        reject("No hay stock")
      }, 2000);
  
    })
    
  };
  
  const cutFruit = (frappeOrden)=>{
    return new Promise ((resolve,reject)=>{
        if (frappeOrden.fruit){
            setTimeout(() => {
                console.log(`Tu seleccion es ${frappeOrden.fruit}`)
                resolve(frappeOrden);
              }, 2000);
        }else{
            reject("Fruta no disponible , verifica tus opciones")

        }
      
    })
  };
  
  
  const addWaterIce = (frappeOrden)=>{
    return new Promise ((resolve,reject)=>{
        if(frappeOrden.liquid){
            setTimeout(() => {
                console.log(`Tu seleccion es ${frappeOrden.liquid}`)
                resolve(frappeOrden);
                reject("No hay stock")
              }, 1000);
        }else{
            reject("Liquido no disponible , verifica tus opciones")
        }

      
    })
  
  };
  
  const setMachine = (frappeOrden)=>{
    return new Promise ((resolve,reject)=>{
    
      setTimeout(() => {
        console.log(`La maquina se inicializa`)
        resolve(frappeOrden);
      }, 1000);
    })
  
  
  };
  
  const setHolder = (frappeOrden)=>{
    return new Promise ((resolve,reject)=>{
        if(frappeOrden.holder){
            setTimeout(() => {
                console.log(`Tu seleccion es ${frappeOrden.holder}`)
                resolve(frappeOrden);
              }, 1000);
        }else{

            reject("Holder no disponible , verifica tus opciones")
        }
      
    })
      
  };
  
  const setToppings = (frappeOrden)=>{
    return new Promise ((resolve,reject)=>{
        if(frappeOrden.toppings){
            setTimeout(() => {
                console.log(`Tu seleccion es ${frappeOrden.toppings}`)
                resolve(frappeOrden);
              }, 1000);
        }else{
            reject("Topping no disponible , verifica tus opciones")
        }
      
    })
  };
  
  const serveIce = (frappeOrden)=>{
    return new Promise ((resolve,reject)=>{
      setTimeout(() => {
        console.log(`Tu frappe esta servido`)
        resolve(frappeOrden);
      }, 2000);
    })
  };
  
  const errorMessage = (mensaje)=>{
    console.error(`Error : ${mensaje}`)
  
  }

  const finalMessage = ()=>{
    console.log("Gracias por su preferencia")
  }
  
  order(frappeOrden)
    .then(cutFruit)
    .then(addWaterIce)
    .then(setMachine)
    .then(setHolder)
    .then(setToppings)
    .then(serveIce)
    .catch(errorMessage)
    .finally(finalMessage)
    
  
