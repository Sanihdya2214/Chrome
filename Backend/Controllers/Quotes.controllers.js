export const getQuotes = async (req, res) => {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    if (!response.ok) {
      return res.status(404).json(data.error || "Something Went Wrong");
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
};
