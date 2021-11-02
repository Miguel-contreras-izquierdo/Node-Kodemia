const express = require("express")
const router = express.Router()
const { restart } = require("nodemon")
const product = require("../usecases/products")
const authHandler = require("../middlewares/authHandlers")
const app = express()
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
        const productGet = await product.getById(productId)
        response.json({
            ok:true,
            message:"Done!",
            payload: {productGet},
        })
    }catch(error){
        next(error)
    }
})

// Creando post
// app.use(authHandler)
router.post("/",authHandler,async (request, response,next)=>{
    

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