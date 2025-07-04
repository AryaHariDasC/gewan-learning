const Order = require('../models/orderModels');
const mongoose = require('mongoose');

exports.getOrdersWithDetails = async (req, res) => {
  const {employee_id}=req.params;
    try {
      
        
        const orders = await Order.aggregate([
            {
              $match:{
                employeeId:new mongoose.Types.ObjectId(employee_id)
              }
            },
            {
                $lookup: {
                    from: 'employees',
                    localField: 'employeeId',
                    foreignField: '_id',
                    as: 'employeeDetails'
                }
            },
            { $unwind: '$employeeDetails' },
            {
                $lookup: {
                    from: 'products',
                    localField: 'productId',
                    foreignField: '_id',
                    as: 'productDetails'
                }
            },
            { $unwind: '$productDetails' },
        ]);
        res.status(200).json({ message: 'Orders with details', orders });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};