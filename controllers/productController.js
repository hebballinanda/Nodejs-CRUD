const productModel = require('../models/productModel'); // Import the product model

async function fetchAllProducts(req, res) {
    try {
        const products = await productModel.getProducts();
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send('Error fetching products');
    }
}

async function fetchProductById(req, res) {
    const { id } = req.params;
    try {
        const product = await productModel.getProductById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).send('Error fetching product');
    }
}

// Controller to add a new product
async function createProduct(req, res) {
    const { name, price } = req.body;
    console.log(req);
    try {
        const newProduct = { name, price };
        const product = await productModel.addProduct(newProduct);
        res.status(201).json(product); // Return the inserted product
    } catch (err) {
        console.error('Error adding product:', err);
        res.status(500).send('Error adding product');
    }
}

// Controller to update an existing product
async function updateProduct(req, res) {
    const { id } = req.params;
    const updatedProduct = req.body;
    try {
        const isUpdated = await productModel.updateProduct(id, updatedProduct);
        if (!isUpdated) {
            return res.status(404).send('Product not found');
        }
        res.send('Product updated successfully');
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).send('Error updating product');
    }
}

// Controller to delete a product
async function deleteProduct(req, res) {
    const { id } = req.params;
    try {
        const isDeleted = await productModel.deleteProduct(id);
        if (!isDeleted) {
            return res.status(404).send('Product not found');
        }
        res.send('Product deleted successfully');
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).send('Error deleting product');
    }
}

module.exports = {
    fetchAllProducts,
    fetchProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}