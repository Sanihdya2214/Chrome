import express from "express"
import { createPoll,getPolls,PostVotes } from "../Controllers/Polls.controllers.js";



const route = express.Router()

route.post("/createPoll", createPoll);
route.get("/polls", getPolls);
route.post("/vote", PostVotes);

export default route