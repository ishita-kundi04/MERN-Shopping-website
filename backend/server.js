const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling uncaught Exception
// example - console.log(variabble);
process.on("UncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting Down the server due to Uncaught Exception");
  process.exit(1);
});

const PORT = process.env.PORT || 4000;

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting to database
connectDatabase();

// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server is working on https://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err}`);
  console.log("Shutting Down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
