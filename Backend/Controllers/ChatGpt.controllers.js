async function callCohere(message) {
  const response = await fetch("https://api.cohere.ai/v1/generate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-xlarge-nightly",
      prompt: message,
      max_tokens: 300,
      temperature: 0.75,
    }),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(`Cohere API Error: ${errorDetails.message}`);
  }

  return await response.json();
}

export const chatGptController = async (req, res) => {
 const { message } = req.body;
 //console.log("Received message:", message);

 try {
   const data = await callCohere(message);
   //console.log("Cohere API response:", data);
   res.json(data);
 } catch (error) {
   console.error("Error sending message:", error);
   res.status(500).json({ error: error.message });
 }
};
