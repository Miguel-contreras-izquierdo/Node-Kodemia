const Product = require("../../models/products").model

// Obtener todos los productos
const get = async()=>{
    const allProducts = await Product.find({}).exec()

    return allProducts
}

// Obtener productos por productId
const getById = async(productId)=>{
    const product = await Product.findById(productId).exec()
    return product
}

// Creando productos

const create = async (productData) =>{
    const {name,price} = productData


    const product = new Product({name,price})

    const savedProduct = await product.save()

    return savedProduct

}

// Eliminar producto

const del = (productId)=>{
    return Product.findByIdAndDelete(productId).exec()
}

// Actualizar producto
const update = (productId,productData) =>{
    const {name,price} = productData
    return Product.findByIdAndUpdate(productId,{name,price}).exec()
}

module.exports ={
    get,
    create,
    getById,
    del,
    update,
}