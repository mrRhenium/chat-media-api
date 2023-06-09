import cors from "cors";
const whiteList = [
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  "https://chat-app-2-0-eight.vercel.app",
];

const corsOptionDelegate = (req, callback) => {
  let corsOptions;

  if (whiteList.indexOf(req.header("Origin")) != -1) {
    //

    corsOptions = {
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    };

    callback(null, corsOptions);

    //
  } else {
    //

    corsOptions = {
      origin: false,
    };

    callback(null, corsOptions);

    //
  }

  //
};

const corsProtection = cors(corsOptionDelegate);

export default corsProtection;
