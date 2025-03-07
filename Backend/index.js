const express = require('express');
const connectDB = require('./src/Database/db');
const { getAllProducts } = require('./src/controllers/productController');
const { getSelectedAddress } = require('./src/controllers/addressController');
const { getTotalCartValue, placeOrder } = require('./src/controllers/cartController');
const app = express();

require('dotenv').config({
    path: "./src/Database/db"
})

const PORT = process.env.port || 5000;
const url = process.env.db_url;
console.log(PORT)

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route to display all products
app.get('/products', getAllProducts);

// Route to display selected address
app.get('/address', getSelectedAddress);

// Route to display total cart value
app.get('/cart-value', getTotalCartValue);

// Route to place order
app.post('/place-order', placeOrder);

app.listen(PORT, async () => {
    try {
        await connectDB(url);
        console.log(`server is running on the port ${PORT}`);
    }
    catch (err) {
        console.status(400).json({ message: "server not running", err })
    }
});