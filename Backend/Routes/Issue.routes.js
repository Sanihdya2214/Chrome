import express from "express";
import { PostIssue } from "../Controllers/Issue.controllers.js";

const route = express.Router();

route.post("/submit-issue", PostIssue);

export default route;
