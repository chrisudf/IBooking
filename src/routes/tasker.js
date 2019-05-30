const express = require('express');
const {
    getAllTasker
} = require('../controllers/tasker');
// const validateId = require('../middleware/validateId');

const router = express.Router();

router.get('', getAllTasker);


module.exports = router;