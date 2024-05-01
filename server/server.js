import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth-routes.js";
// const path = require("path");
import cookieParser from "cookie-parser";
// const loginRouter = require("./router/loginRouter");
// const usersRouter = require("./router/usersRouter");
// const inboxRouter = require("./router/inboxRouter");

const app = express();
dotenv.config();
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => { 
  res.send("Hello World!");
});

// database connection
// mongoose
//   .connect(process.env.MONGO_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("database connection successful!"))
//   .catch((err) => console.log(err));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup

app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
