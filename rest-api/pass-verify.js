const bcrypt = require("bcrypt")

const verifyPassword = async()=>{
    const password = "password123"
    const hash = "somenthing"

    const isMatch = await bcrypt.compare(password,hash)
    
}