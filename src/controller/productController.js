const Product=require('../models/productmodel')

exports.createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { productname,brand,price,stock } = req.body;
        const product = new Product({  productname,brand,price,stock});
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
}
};
 exports.getAllProducts=async(req,res)=>{
try{
    console.log("Getting all products");
    const product=await Product.find();
        res.status(200).json({message:'Product retrived sucessfully',product});
    }catch(error){
        res.status(500).json({message:'Error in retriving products',error:error.message});
    }
};