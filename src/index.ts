// Libs
import "dotenv/config";
import express, { Express } from "express";

// Modules
import "./utils/db";
import userRoutes from "./routes/users";

// Vals
const app: Express = express();
const port = process.env.PORT || 3000;

// MiddleWare
app.use(express.json());

// Routes
app.use(userRoutes);

// Init Server
app.listen(port, () => {
    console.log("App is running on port " + port);
})