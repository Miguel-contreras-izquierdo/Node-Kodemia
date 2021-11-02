const express = require("express")
const router = express.Router()
const createUser = require("../usecases/users")

// Get users general
router.get("/", (request,response)=>{
        const users =[]
        const {limit} = request.query
    
        for(let index = 0; index<limit ; index++){
            users.push({
                userName:faker.internet.userName(),
                firstName:faker.name.firstName(),
                lastName:faker.name.lastName(),
    
            })
        }
        if(limit){
            response.json({
                ok:true,
                payload:users,
            })
        }else{
            response.json({
                ok:false,
                message: "El limite es obligatorio"
            })
        }
    })



    
/// Get users por userID
    
    
router.get("/:userId", (request,response)=>{
        const {userId} = request.params
        const {auth} = request.body
        
        response.json({
                auth,
                userId,
                userName:faker.internet.userName(),
                firstName:faker.name.firstName(),
                lastName:faker.name.lastName(),
    
        })
})

//Post user por userId
// ¿ Como aseguro que los cambos del usuario vengan completos
// Usar middleware
router.post("/",async(request,response,next)=>{
    try{
        const userData = request.body
        const userCreated = await createUser.create(userData)

        response.status(201).json({
            ok:true,
            message:"User Created successfully",
            payload:{
                userCreated,
            }
        })
    }catch(error){
        next(error)
    }

})

// Patch en usersId

router.patch("/:userId",(request,response)=>{
    const {userId} = request.params
    const {auth,userName,firstName,lastName} = request.body

    response.json({
        ok:true,
        message:`User ${userId} updated succesfully`,
        payload:{
            firstName,
            lastName,
            userName,
            email,
            password
        }

    })


})

// Delete en usersId

router.delete("/:userId",(request,response)=>{
    const {userId} = request.params
    const {auth} = request.body

    response.status(202).json({
        ok:true,
        message: `User ${userId} deleted succesfully`
    })
    
    

})

module.exports = router