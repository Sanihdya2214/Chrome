import express from "express";
import { getQuotes } from "../Controllers/Quotes.controllers.js";

const route = express.Router();



route.get("/quote", getQuotes)



export default route