require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const productRouter = require('./routes/productRouter');

app.use(bodyParser.json());

app.use('/products',productRouter);

db.connect()
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log(`Server running on http://localhost:${process.env.PORT}`);
        })
    })
    .catch(err=>{
        console.error('Error starting the server:', err);
        process.exit(1); 
    })


app.use((req, res) => {
    res.status(404).send('404 page');
});