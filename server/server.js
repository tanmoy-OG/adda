import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectMongoDB.js";
import { app, server } from "./socket/socket.js";

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

app.use(express.static(path.join(__dirname, "/client/.next/static/chunks")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "client",
      ".next",
      "static",
      "chunks",
      "app",
      "layout-eb10590a66edcf6e.js"
    )
  );
});

server.listen(process.env.PORT, () => {
  connectToMongoDB();
  console.log(`app listening to port ${process.env.PORT}`);
});
