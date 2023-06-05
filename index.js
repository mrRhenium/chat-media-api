import express from "express";
import bodyParser from "body-parser";
// import dotenv from "dotenv";
import cors from "cors";

import profileRouter from "./routes/profileRouter.js";
import chatRouter from "./routes/chatRouter.js";
// import corsProtection from "./Protection/corsOption.js";

const app = express();
const port = 2804 || process.env.PORT;

// ***************************************************
// Middleware Part Start Here
// ***************************************************

// body parser parse the upcoming json body
app.use(bodyParser.json());

// cors protection
app.use(cors());
// app.use(corsProtection);
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method == "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }

//   next();
// });

// server static files to the client
app.use("/", express.static("public"));

// ***************************************************
// Middleware Part End Here
// ***************************************************

// ***************************************************
// API Routes Start Here
// ***************************************************

app.get("/", (req, res) => {
  res.send("Media Server for Chat Application");
});

// Routes related to profile page
app.use("/media/profile", profileRouter);

// Routes related to profile page
app.use("/media/chat", chatRouter);

// ***************************************************
// API Routes End Here
// ***************************************************

// ***************************************************
// listening the port at port no 3000
// ***************************************************
app.listen(port, () => {
  console.log(`Media Server is started and host at http://localhost:${port}`);
});
