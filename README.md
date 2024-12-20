# 5th-semMilestone
1. Test POST /menu to Add Menu Items
The first step is to add menu items to  food delivery system.

Request Type: POST
URL: http://localhost:3000/menu
Request Body (JSON):
json

{
  "id": 1,
  "name": "Burger",
  "price": 5.99,
  "category": "Fast Food"
}

Response:
json

{
  "message": "Menu item added",
  "item": {
    "id": 1,
    "name": "Burger",
    "price": 5.99,
    "category": "Fast Food"
  }
}
Explanation: This request adds a new menu item to the system. If the item is added successfully, the server will return the id, name, price, and category of the menu item.


2. Test GET /menu to Retrieve Menu Items
Once you have added some menu items, you can retrieve them.

Request Type: GET
URL: http://localhost:3000/menu
Expected Response (assuming you've added one item):
json

[
  {
    "id": 1,
    "name": "Burger",
    "price": 5.99,
    "category": "Fast Food"
  }
]
Explanation: This request fetches all the menu items currently in the system. If no items have been added, it will return an empty array.

3. Test POST /orders to Place an Order
Next, you can place an order by referencing the menu item you added earlier.

Request Type: POST
URL: http://localhost:3000/orders
Request Body (JSON):
json

{
  "items": [1]  // Use the ID of the menu item you added earlier
}
Expected Response:
json
{
  "message": "Order placed",
  "order": {
    "id": 1,
    "items": [1],
    "status": "Preparing",
    "createdAt": "2024-12-04T10:00:00.000Z"
  }
}
Explanation: This request places an order with the item(s) you specify by their IDs. In this example, the ID of the item is 1. The server should respond with an id for the order, the list of items ordered, and an initial status of "Preparing."


4. Test GET /orders/:id to Retrieve Order Details
To view the details of an order, use the GET /orders/:id endpoint, where :id is the order ID returned when placing the order.

Request Type: GET
URL: http://localhost:3000/orders/1 (Replace 1 with the actual order ID returned from the order creation step.)
Expected Response:
json
{
  "id": 1,
  "items": [1],
  "status": "Preparing",
  "createdAt": "2024-12-04T10:00:00.000Z"
}
Explanation: This request will return the details of the specific order, including the items in the order, its status, and the creation timestamp.
