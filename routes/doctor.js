const express = require('express');

const router = express.Router();
const doctorController = require('../controllers/doctor_controller');



router.get('/register',doctorController.register );


module.exports = router;