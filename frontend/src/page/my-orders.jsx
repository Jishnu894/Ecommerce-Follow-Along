import React, { useEffect, useState } from "react";
import axios from "axios";

function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:3000/user/my-orders", {
                    params: { email: "user@example.com" } // Replace with the actual user email
                });
                setOrders(response.data.orders);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div>
            <h2>My Orders</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        <p>Order ID: {order.id}</p>
                        <p>Product: {order.productName}</p>
                        <p>Quantity: {order.quantity}</p>
                        <p>Price: {order.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyOrders;
