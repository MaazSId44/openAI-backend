const express = require('express');
const router = express.Router();

const { getItems, createItem, deleteItem } = require('../controllers/itemController');
const { itemValidationRules } = require('../middlewares/validations');

// Item Routess
router.get('/items', getItems);
router.post('/items', itemValidationRules, createItem);
router.delete('/items/:id', deleteItem);

module.exports = router;
