const productsRouter = require("./productsRouters")
const categoriesRouter = require("./categoriesRouters")
const userRouter = require("./userRouters")
const authRouter = require("./authRouter")
const { application } = require("express")


const apiRouter = (app)=>{
    app.use("/products", productsRouter)
    app.use("/categories",categoriesRouter)
    app.use("/users",userRouter)
    app.use("/auth",authRouter)
}

module.exports = apiRouter