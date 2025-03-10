const Report = require("../models/reportModel");

exports.createReport = async (req, res) => {
  const { crimeType, location, description } = req.body;

  try {
    const report = new Report({ userId: req.user.id, crimeType, location, description });
    await report.save();
    res.status(201).json({ message: "Crime reported successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateReportStatus = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });

    report.status = req.body.status;
    await report.save();
    res.json({ message: "Status updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
