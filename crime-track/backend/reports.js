router.post("/", authMiddleware, async (req, res) => {
  const { crimeType, location, description } = req.body;

  try {
    const report = new Report({ userId: req.user.id, crimeType, location, description });
    await report.save();
    res.status(201).json({ message: "Crime reported successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
