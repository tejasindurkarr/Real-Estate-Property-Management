import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">About the Real Estate World</h1>
            
            <div className="prose lg:prose-xl max-w-none text-gray-800">
                <p>
                    Real estate is a vast and dynamic industry that encompasses property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water. It is a tangible asset and a significant driver of the economy. Understanding its fundamentals is key for anyone looking to buy, sell, or invest.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Real Estate</h2>
                <p>
                    The industry is generally categorized into four main types:
                </p>
                <ul>
                    <li><strong>Residential:</strong> Includes new construction and resale homes. The most common category is single-family homes. This also includes condominiums, co-ops, townhouses, duplexes, triple-deckers, and vacation homes.</li>
                    <li><strong>Commercial:</strong> Includes shopping centers and strip malls, medical and educational buildings, hotels, and offices. Apartment buildings are often considered commercial, even though they are used for residences.</li>
                    <li><strong>Industrial:</strong> Includes manufacturing buildings and property, as well as warehouses. The buildings can be used for research, production, storage, and distribution of goods.</li>
                    <li><strong>Land:</strong> Includes undeveloped property, vacant land, and agricultural land (farms, orchards, ranches, and timberland).</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">The Market and Its Impact</h2>
                <p>
                    The real estate market is deeply intertwined with the economy. Factors like interest rates, economic growth, and population trends can heavily influence property values. For many people, a home is the most significant investment they will ever make. For businesses, commercial real estate is a critical component of their operational strategy.
                </p>
                <p>
                    This application, <strong>RentSphere</strong>, is designed to provide a simple and efficient platform for managing property listings, connecting buyers, sellers, and renters in one accessible place.
                </p>
            </div>
        </div>
    );
};

export default About;
