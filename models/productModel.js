const db = require('../database'); // Import the db module to access the database
const { ObjectId } = require('mongodb');

// Fetch all products (Read All)
async function getProducts() {
    try {
        const productsCollection = db.getDb().collection('products');
        return await productsCollection.find().toArray();
    } catch (err) {
        console.error('Error fetching products:', err);
        throw err;
    }
}

async function getProductById(productId){
    try {
        const productsCollection = db.getDb().collection('products');
        const product = await productsCollection.findOne({ _id: new ObjectId(productId) });
        return product
    } catch (err) {
        console.error('Error fetching products:', err);
        throw err;
    }
}

async function addProduct(product) {
    try {
        const productsCollection = db.getDb().collection('products');
        const result = await productsCollection.insertOne(product);
        return result?.ops?.[0]; // Return the inserted product
    } catch (err) {
        console.error('Error adding product:', err);
        throw err;
    }
}

// Update an existing product by ID (Update)
async function updateProduct(productId, updatedProduct) {
    try {
        const productsCollection = db.getDb().collection('products');
        const result = await productsCollection.updateOne(
            { _id: new db.ObjectId(productId) },
            { $set: updatedProduct }
        );
        return result.matchedCount > 0; // Return true if the product was updated
    } catch (err) {
        console.error('Error updating product:', err);
        throw err;
    }
}

// Delete a product by ID (Delete)
async function deleteProduct(productId) {
    try {
        const productsCollection = db.getDb().collection('products');
        const result = await productsCollection.deleteOne({ _id: new ObjectId(productId) });
        return result.deletedCount > 0; // Return true if the product was deleted
    } catch (err) {
        console.error('Error deleting product:', err);
        throw err;
    }
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
}