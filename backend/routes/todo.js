const express = require('express');
const router = express.Router();

const { createNote, deleteNote, getAll, updateStatus } = require('../controllers/todos')

// Associating the functions with the Api route

router.route('/create').post(createNote);
router.route('/delete/:id').delete(deleteNote);
router.route('/fetch').get(getAll);
router.route('/update').put(updateStatus);

module.exports = router