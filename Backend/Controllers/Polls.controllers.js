import Poll from "../models/poll.model.js";


export const createPoll = async (req, res) => {

    try {
    const { question, options, createdBy } = req.body;
  const votes = new Array(options.length).fill(0);
        const poll = await new Poll({ question, options, votes, createdBy });
          if (!poll) {
            return res.status(404).json( poll.error || "Somehting Went Wrong")
        }
        await poll.save();
      
  res.status(201).json(poll);
    } catch (error) {
        console.log("Error in createPoll controller",error)
    }
}
export const getPolls = async (req, res) => {
      try {
          const polls = await Poll.find();
          
          if (!polls) {
               return res.status(404).json(polls.error || "Something went wrong")
          }
         res.status(201).json(polls);
      } catch (error) {
        console.log("Error in getPolls controller",error);
      }
};
export const PostVotes = async (req, res) => {
    try {
        const { pollId, optionIndex } = req.body;
        const poll = await Poll.findById(pollId);
        poll.votes[optionIndex]++;
   
        if (!poll) {
            return res.status(404).json(poll.error || "Something went wrong")
        }

        await poll.save();
        res.status(201).json(poll);
    } catch (error) {
        console.log("Error in PostVotes controller",error)
    }
};

