const express = require('express');
const {
    getAllTask
} = require('../controllers/task');
// const validateId = require('../middleware/validateId');

const router = express.Router();

router.get('', getAllTask);


module.exports = router;