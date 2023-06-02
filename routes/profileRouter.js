import express from "express";
import fs from "fs/promises";

import upload from "../MediaUploader/multer.js";

const profileRouter = express.Router();

// ***************************************************
// Profile Page Routes Start Here
// ***************************************************

// POST Route
profileRouter.post("/", upload.single("profilePic"), (req, res) => {
  res.json({
    status: true,
    msg: "Successfully!: Profile Picture is Uploaded.",
  });
});

// PUT Route
profileRouter.put("/", upload.single("profilePic"), (req, res) => {
  res.json({
    status: true,
    msg: "Successfully!: Profile Picture is Updated.",
  });
});

// DELETE Route
profileRouter.delete("/", async (req, res) => {
  try {
    //

    const userId = req.query.userId;
    const imgId = req.query.imgId;

    await fs.rm(`public/assets/${userId}/profile/${imgId}`, {
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
