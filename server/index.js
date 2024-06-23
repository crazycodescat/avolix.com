import express from "express";
import env from "dotenv";
import cors from "cors";

//MODULES
import rfqRoutes from "./src/routes/rfqRoutes.js";
import captchaTokenVerification from "./src/middlewares/captchaTokenVerification.js";

const app = express();
env.config();

// Use middleware to parse JSON and handle URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES MIDDLEWARE
app.use("/api", captchaTokenVerification, rfqRoutes);

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
