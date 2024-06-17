const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

// Route to list all songs
router.get('/songs', songController.list);

// Route to display the form for adding a new song
router.get('/songs/new', songController.new);

// Route to add a new song
router.post('/songs', songController.create);

// Route to show a specific song by ID
router.get('/songs/:id', songController.show);

module.exports = router;
