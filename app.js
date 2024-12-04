const express = require('express');
const cron = require('node-cron');
const bodyParser = require('body-parser');
const { router: menuRouter } = require('./routes/menu'); // Destructure to get 'router'
const ordersRouter = require('./routes/order'); // Directly import router from orders.js

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Use the routers
app.use('/menu', menuRouter); // Now this will work correctly with the router
app.use('/orders', ordersRouter); // This also will work correctly

// Start cron job to update order status every 10 minutes
cron.schedule('*/10 * * * *', () => {
    console.log('Updating order statuses...');
    ordersRouter.updateOrderStatuses();
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
