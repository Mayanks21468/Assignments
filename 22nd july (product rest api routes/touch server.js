const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BONUS Middleware: Logger
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

let products = [
  { id: 1, name: "Laptop", price: 49999, category: "Electronics" },
  { id: 2, name: "Shoes", price: 1999, category: "Fashion" },
  { id: 3, name: "Book", price: 299, category: "Education" }
];

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST new product
app.post('/products', (req, res) => {
  const { name, price, category } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price: parseFloat(price),
    category
  };
  products.push(newProduct);
  console.log("Product added:", newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) return res.status(404).json({ error: "Product not found" });

  const updatedData = req.body;
  products[index] = { ...products[index], ...updatedData };
  console.log("Product updated:", products[index]);
  res.json(products[index]);
});

// DELETE product
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter(p => p.id !== productId);
  console.log(`Product with ID ${productId} deleted`);
  res.json({ message: `Product ${productId} deleted` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
