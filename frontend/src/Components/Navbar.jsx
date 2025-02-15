import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to="/profile" className="text-white hover:text-gray-300">
                    Profile 
                    </Link>
                </div>

                <div className='flex space-x-6'>
                    <Link to="/about" className="text-white hover:text-gray-300">
                        About us
                    </Link>
                    <Link to="/products" className="text-white hover:text-gray-300">
                        Product page
                    </Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">
                        Contact page
                    </Link>
                    <Link to="/login" className="text-white hover:text-gray-300">
                        Login/SignUp 
                        </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;