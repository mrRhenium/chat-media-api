import multer from "multer";
import fs from "fs/promises";
import syncFs from "fs";

const storage = multer.diskStorage({
  destination: async (req, file, next) => {
    const imgId = req.body.imgId;
    const userId = req.body.userId;

    try {
      //

      let exist = syncFs.existsSync(`public/assets/${userId}/profile/${imgId}`);

      if (exist) {
        await fs.rm(`public/assets/${userId}/profile/${imgId}`, {
          recursive: true,
        });

        console.log("previous Image is cleared");
      }

      await fs.mkdir(`public/assets/${userId}/profile/${imgId}`, {
        recursive: true,
      });

      //
    } catch (err) {
      console.log(err);

      res.json({
        status: false,
        msg: `${err}`,
      });
    }

    next(null, `public/assets/${userId}/profile/${imgId}`);
  },

  filename: (req, file, next) => {
    const fileExt = file.originalname.split(".")[1];

    next(null, file.originalname);
    // next(null, `profilePic.${fileExt}`);
  },
});

const imageFileFilter = (req, file, next) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return next("You can upload only image files!", false);
  }

  next(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

export default upload;
