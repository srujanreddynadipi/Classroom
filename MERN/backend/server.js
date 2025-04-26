// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';

dotenv.config();

const app = express();

app.post('/products',async (req, res) => {
  const product = req.body;

  if(!product.name || !product.price || !product.image) {
    return res.status(400).json({
      sucess: false,
      message: 'Product name, price and image are required',
    });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      sucess: true,
      message: 'Product created successfully',
      data: newProduct,
    });
  } catch (error) {
    console.error("error is create product :",error.message)
    res.status(500).json({
      sucess: false,
      message: 'Something went wrong',
    });
  }
});


app.listen(5000, () => {
  connectDb();
  console.log('Server is running at http://localhost:5000  ');
});