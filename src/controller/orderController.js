
const Order=require('../models/orderModels');
exports.orderCreate = async (req, res) => {
    try {
        const order=new Order(req.body);
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order});
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message});
}
};
exports.getOrderDetails=async(req,res)=>{
    try{
       const {id}=req.params;
        const order=await Order.findById(id);
        console.log(order);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
         console.log("Oreder deatils:",order);
         await order.populate('productId')
         await order.populate('employeeId')
        res.status(200).json({message: "Details retrieved successfully",order});
        
    } 

    catch(error){
         res.status(500).json({message:"getting deatils failed",error:error.message})
    }
};