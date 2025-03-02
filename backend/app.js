import express from "express";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js"
import errorHandler from "./middleware/errorHandler.js";


connectDB();

const app = express();

app.use('/api/url', urlRoutes);

app.use(errorHandler);

export default app;