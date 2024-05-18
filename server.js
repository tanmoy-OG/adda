import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./server/routes/authRoutes.js";
import messageRoutes from "./server/routes/messageRoutes.js";
import userRoutes from "./server/routes/userRoutes.js";
import connectToMongoDB from "./server/db/connectMongoDB.js";
import CustomError from "./server/utils/customError.js";
import { app, server } from "./server/socket/socket.js";

// load environment variables
dotenv.config();

// PORT
const PORT = process.env.PORT || 5000;

// request parsers
app.use(express.json());

// parse cookies
app.use(cookieParser());

// routing setup
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Handle unknown routes
app.all("*", (req, _, next) => {
  next(new CustomError(`Route '${req.originalUrl}' not found`, 404));
});

server.listen(process.env.PORT, () => {
  connectToMongoDB();
  if (process.env.NODE_ENV === "development") {
    console.log(`app listening to port http://localhost:${PORT}`);
  } else {
    console.log(`app listening to port ${PORT}`);
  }
});
