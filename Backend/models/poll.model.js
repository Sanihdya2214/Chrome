import mongoose from "mongoose"

const pollSchema = mongoose.Schema({
  question: String,
  options: [String],
  votes: [Number],
  createdBy: String,
});

const Pollmodel = mongoose.model("Poll", pollSchema)

export default Pollmodel