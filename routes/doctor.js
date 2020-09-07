const express = require('express');

const router = express.Router();
const doctorController = require('../controllers/doctor_controller');


// route to register a new doctor
router.post('/register',doctorController.register );


module.exports = router;