const express = require("express");
const router = express.Router();

const authController = require('../controllers/authController');

router.put('/forgot-password', authController.forgotPassword );
router.put('/reset-password', authController.resetPassword );



module.exports = router;

