const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/errors");
import sslRedirect from 'heroku-ssl-redirect';

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload")
//const dotenv = require('dotenv');
const path = require('path')

// enforcing HTTPS redirect
app.use(sslRedirect());

if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());




// Importing all routes
const products = require("./routes/product");
const users = require("./routes/user");
const order = require("./routes/order");
const payment = require('./routes/payment');

app.use("/api/v1", products);
app.use("/api/v1", users);
app.use("/api/v1", order);
app.use('/api/v1', payment)

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

// Middleware error handler
app.use(errorMiddleware);

module.exports = app;
