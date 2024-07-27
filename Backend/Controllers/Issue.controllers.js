export const PostIssue = async (req, res) => {
   const { issue } = req.body;
  const formData = new URLSearchParams();
  formData.append("entry.2045070300", issue); 

  try {
    const response = await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdR4rQVIqU3g5f8STIkXz6PMQIVqkFfkTaHFGZvvfrkv4uaqQ/formResponse",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    res.status(200).json({ message: 'Issue submitted successfully' });
  } catch (error) {
    console.error('Error submitting the issue:', error);
    res.status(500).json({ message: 'Error submitting the issue. Please try again later.' });
  }
    
}