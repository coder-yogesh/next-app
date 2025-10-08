const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');
const auth = require('../middleware/auth');


router.post('/notes', auth, noteController.createNote);
router.get('/notes/:id', auth, noteController.getAllNotes);
router.put('/notes/:id', auth, noteController.updateNote);
router.delete('/notes/:id', auth, noteController.deleteNote);


module.exports = router;