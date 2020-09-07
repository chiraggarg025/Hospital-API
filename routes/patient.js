const express = require('express');

const router = express.Router();
const patientController = require('../controllers/patient_controller');


// route to register a new doctor
router.post('/register',patientController.register );


module.exports = router;