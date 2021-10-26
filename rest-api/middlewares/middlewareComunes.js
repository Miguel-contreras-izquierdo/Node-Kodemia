// Middleware comunes
(request,response,next)=>{
    // data processing

    if (something){
        response.send("end")
    }else{
        next()
    }
}

// Middleware de error
(error,request,response,next)=>{
    // data processing

    if(error){
        response.status(500).json({error})
    }else{
        next()
    }
}