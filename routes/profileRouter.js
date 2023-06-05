import express from "express";
import fs from "fs/promises";

import upload from "../MediaUploader/multer.js";

const profileRouter = express.Router();

// ***************************************************
// Profile Page Routes Start Here
// ***************************************************

// GET Route
profileRouter.get("/", (req, res) => {
  res.json({
    status: true,
    msg: "Successfully!: Profile Picture is Shown",
  });
});

// POST Route
// upload.single("profilePic"),
profileRouter.post("/", async (req, res) => {
  try {
    res.json({
      status: true,
      msg: "Successfully!: Profile Picture is Uploaded.",
    });
  } catch (err) {
    res.json({
      status: false,
      msg: `Nitesh Yadav ${err}`,
    });
  }
});

// DELETE Route
profileRouter.delete("/", async (req, res) => {
  try {
    //

    const userId = req.query.userId;

    await fs.rm(`public/assets/${userId}/profile`, {
      recursive: true,
    });

    res.json({
      status: true,
      msg: "Successfully!: Profile Picture is Deleted.",
    });

    //
  } catch (err) {
    //

    res.json({
      status: false,
      msg: "ERROR : Something went wrong.",
    });
    //
  }
});

// ***************************************************
// Profile Page Routes End Here
// ***************************************************

export default profileRouter;
