import "express-async-errors";
import express from "express";
import { router } from "./routes";
import { errorHandler } from "./services/errors.service";

const app = express();
app.use(express.json());
app.use( router );
app.use( errorHandler );

app.listen(3000, () => console.log("Server is running on port 3000"));

