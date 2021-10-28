const express = require("express")
const router = express.Router()
const faker = require("faker")
const { restart } = require("nodemon")
const product = require("../usecases/products")

router.get("/", async (request,response,next)=>{
    const products =[]
    const {limit} = request.query
    try{
        const products = await product.get()
        response.json({
            ok:true,
            message:"Done!",
            payload:{products}
        })
    }catch(error){
        next(error)
    }
    
})  


/// Exercise products/un_product
router.get("/:productId",async (request,response,next)=>{
  
    const {productId} = request.params
   
    try{
        const product = await product.getById(productId)
        response.json({
            ok:true,
            message:"Done!",
            payload: {product},
        })
    }catch(error){
        next(error)
    }
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