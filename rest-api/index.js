const { response, json } = require("express")
const express = require("express")
const app = express()
const port = 8000
const faker = require("faker")
const apiRouter = require("./routes")
const {logErrors, errorHandler} = require("./middlewares/errorHandlers")
const authHandler = require("./middlewares/authHandlers")


// Muestra la información en formato json, parsea todoe el contenido JSON
app.use(express.json())

// Este es el punto de entrada , se queda en el index, siempre tendría que existir

app.get("/",(request,response)=>{
    response.send("Hello Koders-world")

})
// Importando el  modulos de middleware de autentification , va antes incluso que el router de las rutas

app.use(authHandler)

// Enviando al index de las rutas

apiRouter(app)

// Importando los modulos de middleware / el orden es importante, en ese orden se alinearan los middleware
app.use(logErrors)
app.use(errorHandler)



// Agregando nuevas rutas

// app.get("/nueva-ruta", (request, response)=>{

//     response.send("<h1>Probando otra ruta<h1>")
// })

// Agregando nueva ruta de ejemplo ecommerce y tipo json

// app.get("/products", (request, response)=>{
//     response.json({
//         name:"product 1",
//         price:1000,
//     })
// })

// Agregando nueva ruta de un product, conectado a un nodo principal

// app.get("/categories/:categoryId/product/:productId",(request, response)=>{
//     const {categoryId, productId} = request.params
    
//     response.json({
//         productId,
//         categoryId,
//         name:"Product 1",
//         price: 1000,
//     })

// })

// Levantando el servidor web

app.listen(port, ()=>{
    console.log("Listening on port:",port)
})


// Usando faker

app.get("/products", (request,response)=>{
    const products =[]
    const {limit} = request.query

    for(let index = 0; index<limit ; index++){
        products.push({
            name:faker.commerce.productName(),
            price:parseInt(faker.commerce.price(),10),
            image:faker.image.imageUrl(),

        })
    }
    if(limit){
        response.json({
            ok:true,
            payload:products,
        })
    }else{
        response.json({
            ok:false,
            message: "El limite es obligatorio"
        })
    }
})







// /// Exercise products/un_product
// app.get("/products/:productId", (request,response)=>{
  
//     const {productId} = request.params
    
//     response.json({
//             productId,
//             name:faker.commerce.productName(),
//             price:parseInt(faker.commerce.price(),10),
//             image:faker.image.imageUrl(),
//     })
// })

// /// Exercise categories/

// app.get("/categories", (request,response)=>{
//     const categories =[]
//     const {limit} = request.query

//     for(let index = 0; index<limit ; index++){
//         categories.push({
//             categories:faker.commerce.department(),
            

//         })
//     }
//     if(limit){
//         response.json({
//             ok:true,
//             payload:categories,
//         })
//     }else{
//         response.json({
//             ok:false,
//             message: "El limite es obligatorio"
//         })
//     }
// })


// /// Exercise categories/una_category

// app.get("/categories/:categoryId", (request,response)=>{
//     const {categoryId} = request.params
    
//     response.json({
//             categoryId,
//             categories:faker.commerce.department(),
//     })
// })


// /// Exercise users/


// app.get("/users", (request,response)=>{
//     const users =[]
//     const {limit} = request.query

//     for(let index = 0; index<limit ; index++){
//         users.push({
//             userName:faker.internet.userName(),
//             firstName:faker.name.firstName(),
//             lastName:faker.name.lastName(),

//         })
//     }
//     if(limit){
//         response.json({
//             ok:true,
//             payload:users,
//         })
//     }else{
//         response.json({
//             ok:false,
//             message: "El limite es obligatorio"
//         })
//     }
// })


// /// Exercise users/un-usuario


// app.get("/users/:userId", (request,response)=>{
//     const {userId} = request.params
    
//     response.json({
//             userId,
//             userName:faker.internet.userName(),
//             firstName:faker.name.firstName(),
//             lastName:faker.name.lastName(),

//     })
// })