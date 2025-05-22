const { body } = require("express-validator");
const itemValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
];
const openaiValidationRules = [
  body("prompt").notEmpty().withMessage("Prompt is required"),
];

module.exports = {
  itemValidationRules,
  openaiValidationRules,
};
