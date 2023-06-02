import express from "express";

const chatRouter = express.Router();

// ***************************************************
// Profile Page Routes Start Here
// ***************************************************

chatRouter.get("/", (req, res) => {
  res.send("All routes related to Chatting Page.");
});

// ***************************************************
// Profile Page Routes End Here
// ***************************************************

export default chatRouter;
