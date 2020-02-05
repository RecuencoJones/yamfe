const express = require('express');

const products = require('../products.db.json');

const app = express();

const DELAY = process.env.PRODUCTS_DELAY || 250;

app.get('/product', (req, res) => {
  const { category } = req.query;
  const filteredProducts = products.filter((_) => !category || _.category.toLowerCase() === category.toLowerCase());

  setTimeout(() => {
    res.json(filteredProducts);
  }, DELAY);
});

app.get('/product/:id', (req, res) => {
  const product = products.find(({ id }) => id === req.params.id);

  if (product) {
    setTimeout(() => {
      res.json(product);
    }, DELAY);
  } else {
    res.sendStatus(404);
  }
});

app.listen(5000);
