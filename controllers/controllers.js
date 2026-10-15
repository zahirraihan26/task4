
import Product from "../models/product.model.js";


export const createProduct = async (req, res) => {
    const productReq = req.body;
        const product = await Product.create(productReq);
    
        console.log("Product req to me", productReq)
       
        res.json({
            message: "Create Product",
            data: product
        })
};


export const getproducts = async (req, res) => {
    const products = await Product.find();

    res.json({
        message: "Get products",
        data: products
    })
}

export const updateProduct = async (req, res) => {

    const product = await Product.findById(req.params.id);
    
        product.productName = req.body.productName;
        product.price = req.body.price;
        product.description = req.body.description;
        product.quantity = req.body.quantity;
    
        await product.save();
    
         res.json({
            message: "Update product",
            data: product
        })
}

export const deleteProduct = async (req, res) => {

    await Product.findByIdAndDelete(req.params.id);

    res.json({
        message: "Product deleted"
    })
}