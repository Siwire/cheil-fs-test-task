
import express from "express";
import cors from "cors";
import { router } from "./routes";      
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost"],
    credentials: true,
  }),
);

app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

export { app };