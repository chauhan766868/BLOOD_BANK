const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();
const DbURL = process.env.CONNECT || "mongodb://127.0.0.1:27017/pulse";
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: process.env.HOSTED_CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(DbURL);
    console.log("Connected successfully to database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

// Call the function to connect to the database
connectDB();

// Import routers
app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
