import express from "express";
import { chatGptController } from "../Controllers/ChatGpt.controllers.js";

const route = express.Router();

route.post("/chat", chatGptController);

export default route;
