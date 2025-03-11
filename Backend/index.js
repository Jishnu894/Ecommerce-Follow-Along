require('dotenv').config();
const express = require('express');
const connectDB = require('./src/Database/db');
const { getAllProducts } = require('./src/controllers/productController');
const { getSelectedAddress } = require('./src/controllers/addressController');
const { getTotalCartValue, placeOrder } = require('./src/controllers/cartController');
const { createOrder, getUserOrders } = require('./src/controllers/orderController');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

console.log('PORT:', PORT);
console.log('DB URL:', DB_URL);

if (!DB_URL) {
    console.error('Error: DB URL is not defined');
    process.exit(1);
}

connectDB(DB_URL);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route to display all products
app.get('/products', (req, res) => {
    console.log('GET /products');
    getAllProducts(req, res);
});

// Route to display selected address
app.get('/address', (req, res) => {
    console.log('GET /address');
    getSelectedAddress(req, res);
});

// Route to display total cart value
app.get('/cart-value', (req, res) => {
    console.log('GET /cart-value');
    getTotalCartValue(req, res);
});

// Route to place order
app.post('/place-order', (req, res) => {
    console.log('POST /place-order');
    placeOrder(req, res);
});

// Route to create orders
app.post('/create-order', (req, res) => {
    console.log('POST /create-order');
    createOrder(req, res);
});

// Route to get user orders
app.post('/get-user-orders', (req, res) => {
    console.log('POST /get-user-orders');
    getUserOrders(req, res);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});