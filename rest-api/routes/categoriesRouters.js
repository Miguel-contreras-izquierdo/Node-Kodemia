const express = require("express")
const router = express.Router()
const faker = require("faker")

// Get categories general
router.get("/", (request,response)=>{
    const categories =[]
    const {limit} = request.query

    for(let index = 0; index<limit ; index++){
    categories.push({
    categories:faker.commerce.department(),
    })
    
    }
    if(limit){
        response.json({
            ok:true,
            payload:categories,
        })
    }else{
        response.json({
            ok:false,
            message: "El limite es obligatorio"
        })
    }
})

// Get categories por categoyId
router.get("/:categoryId",(request,response)=>{
    const {categoryId} = request.params
    const {auth} = request.body

    response.json({
        auth,
        categoryId,
        categories:faker.commerce.department(),
    })
})

// Post  categories por categoyId
router.post("/:categoryId",(request,response)=>{
    const {categoryId} = request.params
    const body = request.body
    response.status(201).json({
        ok:true,
        message:"Created successfully",
        payload:{
            body,
        }
    })
    
})

// Patch categories por categoryId

router.patch("/:categoryId"),(request,response)=>{
    const {categoryId} = request.params
    const {auth,userName,firstName,lastName} = request.body
    response.json({
        ok:true,
        message:`User ${userId} updated succesfully`,
        payload:{
            auth,
            categoryId,
            categories,
        }

    })

}
// Delete categories por categoryId

router.delete("/:categoryId",(request,response)=>{
    const {categoryId} = request.params

    response.status(202).json({
        ok:true,
        message: `Cateogy ${categoryId} deleted succesfully`
    })
})



module.exports = router