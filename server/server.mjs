import express from "express";
import cors from "cors";
import connectDataBase from "./database.mjs";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);


const app = express();

// setting up config file
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:7001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON requests

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files (uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// connect databas.
connectDataBase();


// Routes..................



app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
