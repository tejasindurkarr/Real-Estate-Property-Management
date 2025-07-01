import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProperty = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        price: '',
        imageUrl: ''
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams(); // Get property ID from URL

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await axios.get(`/api/properties/${id}`);
                setFormData(res.data.data);
                setLoading(false);
            } catch (err) {
                alert('Error fetching property data or property not found.');
                console.error(err);
                navigate('/');
            }
        };
        fetchProperty();
    }, [id, navigate]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };
            await axios.put(`/api/properties/${id}`, formData, config);
            navigate('/');
        } catch (err) {
            alert('Error updating property. Make sure you are the owner.');
            console.error(err.response ? err.response.data : err);
        }
    };

    if (loading) {
        return <p className="text-center mt-8">Loading property data...</p>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Edit Property</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input type="text" name="title" value={formData.title} onChange={onChange} required className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea name="description" value={formData.description} onChange={onChange} required className="w-full px-3 py-2 border rounded-md"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input type="text" name="location" value={formData.location} onChange={onChange} required className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input type="number" name="price" value={formData.price} onChange={onChange} required className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700">Image URL</label>
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={onChange} className="w-full px-3 py-2 border rounded-md" placeholder="https://..."/>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                    Update Property
                </button>
            </form>
        </div>
    );
};

export default EditProperty;