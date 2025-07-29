import React from 'react';
import shoe from '../../../assets/img/shoe.png';
import { ShoppingCart, Heart, User, Bell } from 'lucide-react';

function Navbar() {
    const navItems = [
        { label: 'MEN', subItems: ['Sneakers', 'Loafers'] },
        { label: 'WOMEN', subItems: ['Heels', 'Flats'] },
        { label: 'BAGS', subItems: ['Boys', 'Girls'] },
        { label: 'BRANDS', subItems: ['Boys', 'Girls'] },
        { label: 'ON SALE', subItems: null },
    ];

    return (
        <div className="navbar bg-white text-black shadow-sm px-4">
            {/* Left: Logo + Mobile Dropdown */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <a>{item.label}</a>
                                {item.subItems && (
                                    <ul className="p-2">
                                        {item.subItems.map((sub, i) => (
                                            <li key={i}><a>{sub}</a></li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <li><a>TRACK ORDER</a></li>
                        <li><a>BLOG</a></li>
                    </ul>
                </div>
                {/* Logo */}
                <a href="/" className="ml-2">
                    <img src={shoe} alt="Logo" className="w-20" />
                </a>
            </div>

            {/* Center: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item, idx) => (
                        <li key={idx} className="group relative">
                            <a className="cursor-pointer px-5">{item.label}</a>
                            {item.subItems && (
                                <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded w-40 p-2 z-50">
                                    {item.subItems.map((sub, i) => (
                                        <li key={i}><a className="hover:bg-gray-100 rounded px-2 py-1">{sub}</a></li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li><a>TRACK ORDER</a></li>
                    <li><a>BLOG</a></li>
                </ul>
            </div>

            {/* Right: Button */}
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <Heart className="w-5 h-5" />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <Bell className="w-5 h-5" />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <User className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
