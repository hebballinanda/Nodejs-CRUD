const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/',productController.fetchAllProducts)
productRouter.get('/:id',productController.fetchProductById)
productRouter.post('/add',productController.createProduct)
productRouter.put('/update/:id',productController.updateProduct)
productRouter.delete('/delete/:id',productController.deleteProduct)

module.exports = productRouter