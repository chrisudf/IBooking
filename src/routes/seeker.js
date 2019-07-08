const express = require('express');
const {
    getAllSeekers,
    addSeeker,
    updateSeeker,
    deleteSeeker,
    getSeeker
} = require('../controllers/seeker');
// const validateId = require('../middleware/validateId');

const router = express.Router();

router.get('', getAllSeekers);
router.get('/:id', getSeeker);
router.post('/', addSeeker);
router.put('/:id', updateSeeker);
router.delete('/:id', deleteSeeker);

module.exports = router;