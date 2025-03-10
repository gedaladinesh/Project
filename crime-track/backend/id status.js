router.put("/:id/status", authMiddleware, async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });

    report.status = req.body.status;
    await report.save();
    res.json({ message: "Status updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
