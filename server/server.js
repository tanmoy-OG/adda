import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// const path = require("path");
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectMongoDB.js";
// import cors from "cors";
import { app, server } from "./socket/socket.js";
// const loginRouter = require("./router/loginRouter");
// const usersRouter = require("./router/usersRouter");
// const inboxRouter = require("./router/inboxRouter");

// app.use(cors());
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
app.use(cookieParser());

// routing setup
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

server.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log(`app listening to port ${process.env.PORT}`);
});
