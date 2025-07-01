const Property = require('../models/Property');

// @desc    Get all properties, with search
// @route   GET /api/properties
// @access  Public
exports.getProperties = async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};

        if (search) {
            query = {
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { location: { $regex: search, $options: 'i' } }
                ]
            };
        }

        const properties = await Property.find(query).populate('owner', 'email');
        res.json({ success: true, data: properties });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// @desc    Get single property
// @route   GET /api/properties/:id
// @access  Public
exports.getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ success: false, message: 'Property not found' });
        }
        res.json({ success: true, data: property });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};


// @desc    Add new property
// @route   POST /api/properties
// @access  Private
exports.addProperty = async (req, res) => {
    const { title, description, location, price, imageUrl } = req.body;
    try {
        const propertyData = {
            title,
            description,
            location,
            price,
            owner: req.user.id
        };

        // Only add imageUrl to the object if it was actually provided in the request.
        // This allows Mongoose to use the default value from the schema when imageUrl is empty.
        if (imageUrl && imageUrl.trim() !== '') {
            propertyData.imageUrl = imageUrl;
        }

        const newProperty = await Property.create(propertyData);
        res.status(201).json({ success: true, data: newProperty });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// @desc    Update a property
// @route   PUT /api/properties/:id
// @access  Private
exports.updateProperty = async (req, res) => {
    try {
        let property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({ success: false, message: 'Property not found' });
        }

        // Make sure user is the property owner
        if (property.owner.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'Not authorized' });
        }

        property = await Property.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.json({ success: true, data: property });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// @desc    Delete a property
// @route   DELETE /api/properties/:id
// @access  Private
exports.deleteProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ success: false, message: 'Property not found' });
        }
        // Make sure user is the property owner
        if (property.owner.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'Not authorized' });
        }
        await property.remove();
        res.json({ success: true, data: {} });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};