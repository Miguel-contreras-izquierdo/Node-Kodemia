// Preparar un frappe
// 1. Colocar orden (2 seg)
// 2. Cortar fruta (2 seg)
// 3. Añadir agua y hielo (1 seg)
// 4. Iniciar la máquina (1 seg)
// 5. Seleccionar contenedor (1 seg)
// 6. Seleccionar toppings (3 seg)
// 7. Servir helado (2 seg)

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  // preparación del frappe
  //

// let numeros = [1,2,3]

// const [one, two, three] = numeros

// const orden = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };

// const cutFruit = (fruitIndex,callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 2000);
//   // let selectFruit = stocks.fruits[fruitIndex]
//   // return selectFruit
// };


// const addWaterIce = (waterIceIndex,callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 1000);

//   let selectWaterIce = stocks.liquid[waterIceIndex]
//   return selectWaterIce
// };

// const setMachine = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 1000);
// };

// const setHolder = (holderIndex,callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 1000);

//   let selectHolder = stocks.holder[holderIndex]
//   return selectHolder
  
// };

// const setToppings = (toppingsIndex,callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 3000);

//   let selecTopping = stocks.toppings[toppingsIndex]
//   return selecTopping
  
// };

// const serveIce = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };



// orden(()=>{
//   console.log("Tú orden fue realizada")
//   cutFruit(1,()=>{
//     console.log(`Tu seleccion es ${selectFruit}`)
//     addWaterIce(1,()=>{
//       console.log(`Tu seleccion es ${selectWaterIce}`)
//       setMachine(()=>{
//         console.log("La maquina se inicicializo")
//         setHolder(1,()=>{
//           console.log(`Tu seleccion es ${selectHolder}`)
//           setToppings(1,()=>{
//             console.log(`Tu seleccion es ${selecTopping}`)
//             serveIce(()=>{
//               console.log("Tu helado fue servido")
//             })
//           })

//         })
//       })
//     })

//   })
// })





// Forma directa

// const orden = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };

// const cutFruit = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 2000);
  
// };


// const addWaterIce = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 1000);

// };

// const setMachine = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 1000);
// };

// const setHolder = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 1000);

    
// };

// const setToppings = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 3000);

    
// };

// const serveIce = (callback)=>{
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };



// orden(()=>{
//   console.log("Tú orden fue realizada")
//   cutFruit(()=>{
//     console.log(`Tu seleccion es ${stocks.fruits[1]}`)
//     addWaterIce(()=>{
//       console.log(`Tu seleccion es ${stocks.liquid[1]}`)
//       setMachine(()=>{
//         console.log("La maquina se inicicializo")
//         setHolder(()=>{
//           console.log(`Tu seleccion es ${stocks.holder[1]}`)
//           setToppings(()=>{
//             console.log(`Tu seleccion es ${stocks.toppings[1]}`)
//             serveIce(()=>{
//               console.log("Tu helado fue servido")
//             })
//           })
//         })
//       })
//     })
//   })
// })


// Usando promesas

let  frappeOrden = {
  fruit: stocks.fruits[0],
  liquid: stocks.liquid[0],
  holder: stocks.holder[0],
  toppings: stocks.toppings[0],
}

console.log(frappeOrden)
console.log(frappeOrden.fruit)
console.log(frappeOrden.liquid)

const order = (frappeOrden)=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      console.log(`Tú orden fue realizada`)
      resolve(frappeOrden);
      reject("No hay stock")
    }, 2000);

  })
  
};

const cutFruit = (frappeOrden)=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      console.log(`Tu seleccion es ${frappeOrden.fruit} `)
      resolve(frappeOrden);
    }, 2000);
  })
};


const addWaterIce = (frappeOrden)=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      console.log(`Tu seleccion es ${frappeOrden.liquid}`)
      resolve(frappeOrden);
      reject("No hay stock")
    }, 1000);
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
    setTimeout(() => {
      console.log(`Tu seleccion es ${frappeOrden.holder}`)
      resolve(frappeOrden);
    }, 1000);
  })
    
};

const setToppings = (frappeOrden)=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
      console.log(`Tu seleccion es ${frappeOrden.toppings}`)
      resolve(frappeOrden);
    }, 1000);
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

order(stocks)
  .then(cutFruit)
  .then(addWaterIce)
  .then(setMachine)
  .then(setHolder)
  .then(setToppings)
  .then(serveIce)
  .catch(errorMessage)
  

