const express = require('express');
const {
    getAllSeeker
} = require('../controllers/seeker');
// const validateId = require('../middleware/validateId');

const router = express.Router();

router.get('', getAllSeeker);


module.exports = router;