const Order = require('../models/Order');
const User = require('../models/User');

const createOrder = async (req, res) => {
    const { email, products, address } = req.body;
    console.log('createOrder called with:', { email, products, address });

    try {
        // Retrieve the user ID using the email
        const user = await User.findOne({ email });
        if (!user) {
            console.error('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        const userId = user._id;
        console.log('User ID:', userId);

        // Create separate orders for each product with the same address
        const orders = products.map(product => ({
            user: userId,
            product,
            address,
            status: 'Pending'
        }));

        // Save the orders to the database
        await Order.insertMany(orders);
        console.log('Orders created:', orders);

        res.status(201).json({ message: 'Orders created successfully' });
    } catch (error) {
        console.error('Error creating orders', error);
        res.status(500).json({ message: 'Error creating orders', error });
    }
};

const getUserOrders = async (req, res) => {
    const { email } = req.body;
    console.log('getUserOrders called with:', { email });

    try {
        // Retrieve the user ID using the email
        const user = await User.findOne({ email });
        if (!user) {
            console.error('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        const userId = user._id;
        console.log('User ID:', userId);

        // Fetch all orders for the user
        const orders = await Order.find({ user: userId });
        console.log('User orders:', orders);

        res.status(200).json({ orders });
    } catch (error) {
        console.error('Error fetching user orders', error);
        res.status(500).json({ message: 'Error fetching user orders', error });
    }
};

module.exports = {
    createOrder,
    getUserOrders
};
