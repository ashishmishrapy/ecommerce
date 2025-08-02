import React, { useState } from 'react';
import shoe from '../../../assets/img/shoe.png';
import { ShoppingCart, Heart, User, Bell, X, ChevronDown, ChevronUp } from 'lucide-react';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null); // track which label is open

    const navItems = [
        { label: 'MEN', subItems: ['Sneakers', 'Loafers'] },
        { label: 'WOMEN', subItems: ['Heels', 'Flats'] },
        { label: 'BAGS', subItems: ['Boys', 'Girls'] },
        { label: 'BRANDS', subItems: ['Boys', 'Girls'] },
        { label: 'ON SALE', subItems: null },
    ];

    const toggleSubMenu = (label) => {
        setOpenSubMenu(openSubMenu === label ? null : label);
    };

    return (
        <div className="navbar bg-white text-black shadow-sm px-4 relative">
            {/* Left: Mobile Hamburger + Logo */}
            <div className="navbar-start">
                <button
                    className="btn btn-ghost lg:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <a href="/" className="ml-3 flex items-center">
                    <img src={shoe} alt="Logo" className="w-20 object-contain" />
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
                                        <li key={i}>
                                            <a className="hover:bg-gray-100 rounded px-2 py-1">{sub}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li><a>TRACK ORDER</a></li>
                    <li><a>BLOG</a></li>
                </ul>
            </div>

            {/* Right: Icons */}
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle"><Heart className="w-5 h-5" /></button>
                <button className="btn btn-ghost btn-circle"><ShoppingCart className="w-5 h-5" /></button>
                <button className="btn btn-ghost btn-circle"><Bell className="w-5 h-5" /></button>
                <button className="btn btn-ghost btn-circle"><User className="w-5 h-5" /></button>
            </div>

            {/* Mobile Side Drawer */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black/30 lg:hidden">
                    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 overflow-y-auto transition-transform">
                        <div className="flex justify-end mb-4">
                            <button onClick={() => setMobileMenuOpen(false)} className="btn btn-ghost btn-sm">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Accordion Mobile Menu */}
                        <ul className="space-y-2">
                            {navItems.map((item, idx) => (
                                <li key={idx}>
                                    <div
                                        className="flex justify-between items-center cursor-pointer px-2 py-2 hover:bg-gray-100 rounded"
                                        onClick={() => item.subItems && toggleSubMenu(item.label)}
                                    >
                                        <span>{item.label}</span>
                                        {item.subItems && (
                                            openSubMenu === item.label
                                                ? <ChevronUp className="w-4 h-4" />
                                                : <ChevronDown className="w-4 h-4" />
                                        )}
                                    </div>
                                    {/* Submenu items */}
                                    {item.subItems && openSubMenu === item.label && (
                                        <ul className="ml-4 mt-1 space-y-1 transition-all duration-300">
                                            {item.subItems.map((sub, i) => (
                                                <li key={i} className="text-sm text-black px-2 py-1 hover:bg-gray-100 rounded">
                                                    <a>{sub}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li><a className="block px-2 py-2 hover:bg-gray-100 rounded">TRACK ORDER</a></li>
                            <li><a className="block px-2 py-2 hover:bg-gray-100 rounded">BLOG</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;