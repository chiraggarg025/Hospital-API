const express = require('express');

const router = express.Router();
const reportController = require('../controllers/reports_controller');


// get all reports for a particular status
router.post('/:status',reportController.filterReports);

module.exports = router;