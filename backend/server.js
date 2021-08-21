const app = require("./app");
const connectDatabase = require("./config/database");

//const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

// Handling Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`Shuting down due to Uncaught Exceptions`);
  process.exit(1);
});

// Setting up the config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })
//dotenv.config({ path: "backend/config/config.env" });

// Connecting to Database
connectDatabase();

// Setting up cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// Handling Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log(`Server will shut down due to Unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
