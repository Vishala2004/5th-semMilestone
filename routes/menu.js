// menu.js
const express = require('express');
const router = express.Router();

let menuItems = []; // In-memory menu storage

// Add or update a menu item (POST /menu)
router.post('/', (req, res) => {
    const { id, name, price, category } = req.body;

    // Validate input
    if (!name || !price || !category || price <= 0) {
        return res.status(400).json({ error: 'Invalid menu item' });
    }

    // Check if the item already exists (update if exists)
    const existingItem = menuItems.find(item => item.id === id);
    if (existingItem) {
        existingItem.name = name;
        existingItem.price = price;
        existingItem.category = category;
        return res.status(200).json({ message: 'Menu item updated', item: existingItem });
    }

    // Add new item to the menu
    const newItem = { id, name, price, category };
    menuItems.push(newItem);
    res.status(201).json({ message: 'Menu item added', item: newItem });
});

// Get menu items (GET /menu)
router.get('/', (req, res) => {
    res.status(200).json(menuItems);
});

// Export the router correctly
module.exports = { router, menuItems };
