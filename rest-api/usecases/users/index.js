

/*Crear un usuario
// Recibe datos de usuario
email: pasa directo a la DB
FirstName:pasa directo a la DB
LastName:pasa directo a la DB
password: necesita pasar por bcrypt
> Crear funcion que reciba password, pase por bcrypt y retorne

bcrypt.hash(pass)
// Se necesita un password encriptado
*/
const bcrypt = require("bcrypt")
const User = require("../../models/users").model

const create = async(userData) =>{
    const {email,firstName,lastName,userName,password} = userData

    const hashpass = async(password)=>{
        return await bcrypt.hash(password.toString(),10)
    }
    const passEncry = await hashpass(password)

    const user = new User({email, firstName, lastName, userName, password:passEncry})

    const savedUser = await user.save()

    return savedUser

}

const verifyToken = async(token,secret)=>{

    // ir por el token con find en la DB>
    return  await jwt.verify(token,secret)
}
//   usar verifyToken de acuerdo al request en el middleware

const getByUserName = async(userName)=>{
    return await User.findOne(userName)
}


module.exports = {
    create,
    verifyToken,
    getByUserName,
}

