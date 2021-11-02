const jwt = require("../lib/jwt")

const authHandler = async (req,res,next)=>{
    const {token} = req.headers
    

    try{
        const payload = await jwt.verify(token)
        if (payload){
            // Si agrego un response no deja generar la respuesta del router
            // res.status(200).json({
            //     ok:true,
            //     message:"token Valid",
            // })
            next()
        }else{
            error()
        }
        
    }catch(error){
        res.status(403).json({
            ok:false,
            message:"User not Authorized",
            error:error,
        })
        next(error)
    }
    
}

module.exports = authHandler