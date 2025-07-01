
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const onLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-indigo-600">Elite Property</Link>
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
                    {token ? (
                        <>
                            <Link to="/add-property" className="text-gray-600 hover:text-indigo-600">Add Property</Link>
                            <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
                            <Link to="/register" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
