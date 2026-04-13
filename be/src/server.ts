import { connectDB } from "./config/db";
import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
