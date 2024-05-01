import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
// const path = require("path");
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectMongoDB.js";
// const loginRouter = require("./router/loginRouter");
// const usersRouter = require("./router/usersRouter");
// const inboxRouter = require("./router/inboxRouter");

const app = express();

dotenv.config();

// database connection
// mongoose
//   .connect(process.env.MONGO_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("database connection successful!"))
//   .catch((err) => console.log(err));

// request parsers
app.use(express.json());

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/api/auth", authRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log(`app listening to port ${process.env.PORT}`);
});
