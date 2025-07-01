import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, onDelete, currentUserId }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-gray-800 font-semibold mb-4">${property.price.toLocaleString()}</p>
                <p className="text-gray-700 text-sm">{property.description}</p>
            </div>
            {property.owner._id === currentUserId && (
                <div className="absolute top-2 right-2 flex items-center space-x-2">
                    <Link to={`/edit-property/${property._id}`} className="bg-blue-500 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center text-sm font-bold hover:bg-blue-600 focus:outline-none" title="Edit Property">
                        ✏️
                    </Link>
                    <button
                        onClick={() => onDelete(property._id)}
                        className="bg-red-500 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center text-sm font-bold hover:bg-red-600 focus:outline-none" title="Delete Property">
                        X
                    </button>
                </div>
            )}
        </div>
    );
};

export default PropertyCard;