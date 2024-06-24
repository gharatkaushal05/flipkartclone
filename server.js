const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const cors = require('cors');

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

const cartFilePath = './newcart.json';
const customerFilePath = './customer.json';

// Endpoint to handle adding items to the cart
app.post('/', async (req, res) => {
  const cartItem = req.body;

  try {
    let data;
    try {
      data = await fs.readFile(cartFilePath, "utf-8");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
      data = "[]";
    }

    const items = JSON.parse(data);
    items.push(cartItem);

    await fs.writeFile(cartFilePath, JSON.stringify(items, null, 2), "utf8");
    res.status(200).send("Item added to cart");

  } catch (error) {
    console.error("Error handling the file operations:", error);
    res.status(500).send("Error handling the file operations");
  }
});

// Endpoint to handle adding customer information
app.post('/customer', async (req, res) => {
  const customerData = req.body;

  try {
    console.log("Received customer data:", customerData);

    let data;
    try {
      data = await fs.readFile(customerFilePath, "utf-8");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
      data = "[]";
    }

    let customers;
    try {
      customers = JSON.parse(data);
      if (!Array.isArray(customers)) {
        customers = [];
      }
    } catch (err) {
      customers = [];
    }

    customers.push(customerData);

    await fs.writeFile(customerFilePath, JSON.stringify(customers, null, 2), "utf8");
    res.status(200).send("Customer data added");

  } catch (error) {
    console.error("Error handling the file operations:", error);
    res.status(500).send("Error handling the file operations");
  }
});

app.delete('/:id', async (req, res) => {
  const itemId = parseInt(req.params.id, 10);

  try {
    let data;
    try {
      data = await fs.readFile(cartFilePath, "utf-8");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
      data = "[]";
    }

    let items = JSON.parse(data);
    items = items.filter(item => item.id !== itemId);

    await fs.writeFile(cartFilePath, JSON.stringify(items, null, 2), "utf8");
    res.status(200).send("Item removed from cart");

  } catch (error) {
    console.error("Error handling the file operations:", error);
    res.status(500).send("Error handling the file operations");
  }
});

app.get('/cart', async (req, res) => {
  const filePath = './newcart.json';

  try {
    let data;
    try {
      data = await fs.readFile(filePath, "utf-8");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
      data = "[]";
    }

    const items = JSON.parse(data);
    res.status(200).json(items);

  } catch (error) {
    console.error("Error handling the file operations:", error);
    res.status(500).send("Error handling the file operations");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
