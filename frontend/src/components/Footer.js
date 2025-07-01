import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white shadow-inner mt-8 py-4">
            <div className="container mx-auto text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} TEJAS INDURKAR. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
