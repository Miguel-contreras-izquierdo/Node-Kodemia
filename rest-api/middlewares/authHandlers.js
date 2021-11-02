// const verify = require("")

const authHandler = (req,res,next)=>{
    const {token} = req.headers
    if (token=== "TOKEN-123"){
        next()
    }else{
        res.status(403).json(
            {
                ok:false,
                message:"Unauthorized",
        })            
    }
}

module.exports = authHandler