import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DarkMode from '../themeController/DarkMode';

const Navbar = () => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'My Classes', path: '/classes' },
    ];

    const renderNavLink = ({ name, path }) => (
        <li key={path}>
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition duration-300 ${isActive
                        ? 'text-white bg-blue-400 shadow-md'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100'
                    }`
                }
            >
                {name}
            </NavLink>
        </li>
    );

    return (
        <div className="shadow-md bg-base-100 sticky top-0 z-50">
            <div className="navbar max-w-7xl mx-auto px-4 py-3">
                {/* Left: Logo & Mobile Menu */}
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
                        >
                            {navItems.map(renderNavLink)}
                        </ul>
                    </div>
                    <Link to="/">
                        <img
                            src="/src/assets/Edu-Nest-Main-Logo-1.png"
                            alt="EduNest Logo"
                            className="w-40 h-10 object-contain"
                        />
                    </Link>
                </div>

                {/* Center: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-2">{navItems.map(renderNavLink)}</ul>
                </div>

                {/* Right: Theme Toggle, Login, Avatar */}
                <div className="navbar-end space-x-3">
                    <DarkMode />

                    <NavLink
                        to="/signIn"
                        className="btn btn-outline btn-sm hidden sm:inline-flex border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Sign In
                    </NavLink>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full ring-2 ring-blue-400 hover:scale-105 transition">
                                <img
                                    alt="User Avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><button className="text-red-600">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
