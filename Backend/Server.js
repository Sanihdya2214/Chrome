import express from "express"
import dotenv from "dotenv"
import mongoconnect from "./db/connectDB.js"
import cors from "cors"
import axios from "axios"

import QuoteRoute from "./Routes/Quote.routes.js"
import PollsRoute from "./Routes/Polls.routes.js"
import IssueRoute from "./Routes/Issue.routes.js"
import ChatGptRoute from "./Routes/ChatGpt.routes.js"


dotenv.config()
const app = express()
const Port = process.env.PORT || 3000
const allowedOrigins = [
  "http://localhost:3001",
  "chrome-extension://pmflbimijjhnniflneheicfjhekcbibl",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

//app.use(bodyParser.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: false }));
app.use(cors(corsOptions));


app.use("/api/Polls", PollsRoute)
app.use("/api/Quotes", QuoteRoute)
app.use("/api/Issues",IssueRoute)
app.use("/api/ChatGpt",ChatGptRoute)



app.listen(Port, () => {
    console.log(`The server is running on the Port:${Port}`)
    mongoconnect()
})