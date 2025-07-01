
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProperty = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        price: '',
        imageUrl: ''
    });
    const navigate = useNavigate();

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
            await axios.post('/api/properties', formData, config);
            navigate('/');
        } catch (err) {
            alert('Error adding property');
            console.error(err.response.data);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Add New Property</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input type="text" name="title" onChange={onChange} required className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea name="description" onChange={onChange} required className="w-full px-3 py-2 border rounded-md"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input type="text" name="location" onChange={onChange} required className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input type="number" name="price" onChange={onChange} required className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700">Image URL</label>
                    <input type="text" name="imageUrl" onChange={onChange} className="w-full px-3 py-2 border rounded-md" placeholder="https://..."/>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default AddProperty;
