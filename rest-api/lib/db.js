const mongoose = require("mongoose")

const connect = ()=> new Promise((resolve,reject)=>{
    mongoose.connect(
        "mongodb+srv://js13nimda:l7fHSyX2ha5h65aN@cluster0.hzvvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
        }
    )

    const db = mongoose.connection
    
    db.on("open",()=>{
        console.warn("Connection Succesful")
        resolve(mongoose)
    })

    db.on("error",(error)=>{
        console.error("Connection failed")
        reject(error)

    })
})

module.exports = {
    connect,
}