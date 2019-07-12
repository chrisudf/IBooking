const express = require('express');
const {
    getAllTaskers,
    addTasker,
    updateTasker,
    deleteTasker,
    getTasker
} = require('../controllers/tasker');

const router = express.Router();

router.get('', getAllTaskers);
router.get('/:id', getTasker);
router.post('/', addTasker);
router.put('/:id', updateTasker);
router.delete('/:id', deleteTasker);

module.exports = router;