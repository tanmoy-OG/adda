import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const path = require("path");
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectMongoDB.js";
// import cors from "cors";
import { app, server } from "./socket/socket.js";

// app.use(cors());
dotenv.config();

const __dirname = path.resolve();

// request parsers
app.use(express.json());

// parse cookies
app.use(cookieParser());

// routing setup
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log(`app listening to port ${process.env.PORT}`);
});
