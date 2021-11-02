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

router.post("/",async (request, response,next)=>{
    

    try{
        const productData = request.body
        const productCreated = await product.create(productData)

        response.status(201).json({
            ok:true,
            message:"New Product created successfully",
            payload:{
                product: productCreated,
            }
            
        })
    }catch(error){
        next(error)
    }
    

})


// Creando patch
router.patch("/:productId",async (request,response,next)=>{
    const {productId} = request.params
    const {name, price} = request.body
    try{
        const productPatch = await product.update(productId,{name,price})
        response.json({
            ok:true,
            message:`Product ${productId} updated succesfully`,
            payload:{
                product:{productPatch}
            }
        })
    }catch(error){
        next(error)
    }
    
})

// Creando delete

router.delete("/:productId",async (request,response,next)=>{
    const {productId} = request.params
     // logica para eliminar
    try{
        const productDelete = await product.del(productId)
        response.status(202).json({
            ok:true,
            message: `Product ${productId} deleted succesfully`
        })
    }catch(error){
        next(error)
    }
   
    

})


module.exports = router