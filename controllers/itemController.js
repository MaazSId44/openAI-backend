const Item = require('../models/item');
const asyncHandler = require('../middlewares/trycatch');
const { responseData, errorResponse } = require('../utilis/response');
const { validationResult } = require('express-validator');

exports.getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  return responseData(res, true, 200, items, 'Items fetched successfully');
});

exports.createItem = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, errors.array()[0].msg, 400);
  }

  const { name, description } = req.body;
    const existingItem = await Item.findOne({ name });
  if (existingItem) {
    return errorResponse(res, 'Item already exists', 400);
  }

  const newItem = await Item.create({ name, description });

  return responseData(res, true, 201, newItem, 'Item added successfully');
});

exports.deleteItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedItem = await Item.findByIdAndDelete(id);

  if (!deletedItem) {
    return errorResponse(res, 'Item not found', 404);
  }

  return responseData(res, true, 200, null, 'Item deleted successfully');
});
