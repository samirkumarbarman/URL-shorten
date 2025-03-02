import express from "express";
import shortenURL from "../controller/urlController.js";
import validateURL from "../middleware/validateURL.js";

const router = express.Router();

router.post('/shorten', validateURL, shortenURL);

export default router;