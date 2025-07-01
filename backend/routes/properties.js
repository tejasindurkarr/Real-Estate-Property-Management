const express = require('express');
const { getProperties, getPropertyById, addProperty, updateProperty, deleteProperty } = require('../controllers/propertyController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .get(getProperties)
    .post(protect, addProperty);

router.route('/:id')
    .get(getPropertyById)
    .put(protect, updateProperty)
    .delete(protect, deleteProperty);

module.exports = router;