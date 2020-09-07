const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/',homeController.home );
// for routes related to doctor
router.use('/doctor',require('./doctor'));
// for routes related to patient
router.use('/patient',require('./patient'));


module.exports = router;