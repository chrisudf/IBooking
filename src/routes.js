const express = require('express');
const seekerRoute = require('./routes/seeker');
const taskerRoute = require('./routes/tasker');
const taskRoute = require('./routes/task');
const userRoute = require('./routes/user');
const router = express.Router();

router.use('/seeker', seekerRoute);
router.use('/tasker', taskerRoute);
router.use('/task', taskRoute);
router.use('/users', userRoute);

module.exports = router;