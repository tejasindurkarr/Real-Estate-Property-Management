import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import PropertyCard from '../components/PropertyCard';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setCurrentUserId(decoded.id);
        }
        fetchProperties();
    }, []);

    const fetchProperties = async (query = '') => {
        setLoading(true);
        try {
            const res = await axios.get(`/api/properties?search=${query}`);
            setProperties(res.data.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
        setLoading(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchProperties(searchTerm);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this property?')) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`/api/properties/${id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                fetchProperties(searchTerm); // Refresh list
            } catch (error) {
                console.error('Error deleting property:', error);
                alert('You can only delete your own properties.');
            }
        }
    };

    return (
        <div>
            <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search by title or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Search
                    </button>
                </form>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map(property => (
                        <PropertyCard 
                            key={property._id} 
                            property={property}
                            onDelete={handleDelete}
                            currentUserId={currentUserId}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;