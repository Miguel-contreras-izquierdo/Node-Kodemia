const productsRouter = require("./productsRouters")
const categoriesRouter = require("./categoriesRouters")
const userRouter = require("./userRouters")
const { application } = require("express")


const apiRouter = (app)=>{
    app.use("/products", productsRouter)
    app.use("/categories",categoriesRouter)
    app.use("/users",userRouter)
}

module.exports = apiRouter