import { Switch } from '@mui/material'
import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = ({ scrolled }) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full  h-16 flex justify-between items-center px-6 z-50 transition-colors duration-300 ${scrolled
                    ? "bg-[#282828]"
                    : "bg-transparent"
                    }`}
            >
                <h1 className="text-white font-bold text-xl font-pacifico">Madhan</h1>
                <div className="text-white font-bold text-xl font-poppins hidden md:block">
                    <ul className='flex items-center gap-6 text-sm font-normal text-[#B2BCC9]'>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Experiance</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="relative cursor-pointer w-8 h-8 flex items-center justify-center rounded-full overflow-hidden border border-white"
                    >
                        {/* Sun icon */}
                        <FaSun
                        size={20}
                            className={`absolute  text-white transform transition-all duration-500 ${darkMode ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
                                }`}
                        />

                        {/* Moon icon */}
                        <FaMoon
                        size={20}
                            className={`absolute text-white transform transition-all duration-500 ${darkMode ? "opacity-0 scale-0 rotate-180" : "opacity-100 scale-100 rotate-0"
                                }`}
                        />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar