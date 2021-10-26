const express = require("express")
const router = express.Router()
const faker = require("faker")
const { restart } = require("nodemon")

router.get("/", (request,response)=>{
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


/// Exercise products/un_product
router.get("/:productId", (request,response)=>{
  
    const {productId} = request.params
    
    response.json({
            productId,
            name:faker.commerce.productName(),
            price:parseInt(faker.commerce.price(),10),
            image:faker.image.imageUrl(),
    })
})

// Creando post

router.post("/",(request, response)=>{
    const body = request.body
    response.status(201).json({
        ok:true,
        message:"Created successfully",
        payload:{
            body,
        }
        
    })

})


// Creando patch
router.patch("/:productId",(request,response)=>{
    const {productId} = request.params
    const {name, price,auth} = request.body

    response.json({
        ok:true,
        message:`Product ${productId} updated succesfully`,
        payload:{
            auth,
            name,
            price,
        }
    })
})

// Creando delete

router.delete("/:productId",(request,response)=>{
    const {productId} = request.params
    const {auth} = request.body
    
    // logica para eliminar
    response.status(202).json({
        ok:true,
        message: `Product ${productId} deleted succesfully`
    })

})


module.exports = router