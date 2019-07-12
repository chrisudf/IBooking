const express = require('express');
const {
    getAllSeekers,
    addSeeker,
    updateSeeker,
    deleteSeeker,
    getSeeker,
    addTask,
    deleteTask
} = require('../controllers/seeker');
// const validateId = require('../middleware/validateId');

const router = express.Router();

router.get('', getAllSeekers);
router.get('/:id', getSeeker);
router.post('/', addSeeker);
router.put('/:id', updateSeeker);
router.delete('/:id', deleteSeeker);
router.post('/:id/task/:code', addTask);
router.delete('/:id/task/:code', deleteTask);

module.exports = router;