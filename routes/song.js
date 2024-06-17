const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/songs', songController.list);
router.get('/songs/:id', songController.show);
router.post('/songs', songController.create);

module.exports = router;
