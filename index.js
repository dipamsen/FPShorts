import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { collection, getDoc, doc } from "firebase/firestore";
import db from "./firebase.js";

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

// const coll = collection(db, "linker_data");

// console.log(coll);

// URL Shortener
app.get("/:shortlink", async (req, res) => {
  const { shortlink } = req.params;
  const urlData = await getDoc(doc(db, "linker_data", shortlink));
  if (urlData.exists()) {
    res.redirect(urlData.data().url);
  } else {
    res.status(404).send("Not Found");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
