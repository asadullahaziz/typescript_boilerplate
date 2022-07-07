// Libs
import "dotenv/config";
import express, { Express } from "express";

// Modules
import "./utils/db";

// Vals
const app: Express = express();
const port = process.env.PORT || 3000;

// MiddleWare
app.use(express.json());

// Routes

// Init Server

app.listen(port, () => {
    console.log("App is running on port " + port);
})