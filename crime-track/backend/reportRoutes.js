const express = require("express");
const { createReport, getReports, updateReportStatus } = require("../controllers/reportController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createReport);
router.get("/", authMiddleware, getReports); 
router.put("/:id/status", authMiddleware, updateReportStatus);


module.exports = router;
