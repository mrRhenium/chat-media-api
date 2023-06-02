import express from "express";
import fs from "fs";

const app = express();
const port = 2804 || process.env.PORT;

// ***************************************************
// Middleware Part Start Here
// ***************************************************

// server static files to the client
app.use(express.static("media"));

// ***************************************************
// Middleware Part End Here
// ***************************************************

// ***************************************************
// API Routes Start Here
// ***************************************************

app.get("/", (req, res) => {
  res.send("Media Server for Chat Application");
});

// ***************************************************
// API Routes End Here
// ***************************************************

app.listen(port, () => {
  console.log(`Media Server is started and host at http://localhost:${port}`);
});
