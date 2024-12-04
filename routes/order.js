// orders.js
const express = require('express');
const router = express.Router();
const { menuItems } = require('./menu'); // Import menuItems from menu.js

let orders = []; // In-memory orders storage
const statuses = ['Preparing', 'Out for Delivery', 'Delivered'];

// Place an order (POST /orders)
router.post('/', (req, res) => {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: 'Invalid order items' });
    }

    // Validate if all items exist in the menu
    const invalidItems = items.filter(itemId => !menuItems.find(item => item.id === itemId));
    if (invalidItems.length > 0) {
        return res.status(400).json({ error: `Invalid menu item IDs: ${invalidItems.join(', ')}` });
    }

    const order = {
        id: orders.length + 1,
        items,
        status: statuses[0], // Initial status is 'Preparing'
        createdAt: new Date(),
    };

    orders.push(order);
    res.status(201).json({ message: 'Order placed', order });
});

// Get order details (GET /orders/:id)
router.get('/:id', (req, res) => {
    const orderId = parseInt(req.params.id, 10);
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
});

module.exports = router;
