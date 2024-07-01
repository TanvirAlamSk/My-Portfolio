/* eslint-disable react/prop-types */

import { HiOutlineBars3 } from "react-icons/hi2";
import "./Navbar.css";
const Navbar = ({ showDropdown, setShowDropdown }) => {

    const content = <>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#skill">Skills</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#contact">Contact Me</a>
        </li>
    </>
    return (
        <div className="fixed top-0 w-full pb-0 mb-0">
            <nav className="bg-[#1A0B2E] flex justify-between items-center py-3 px-6 md:px-16 common-style">
                <div className="logo">
                    <h1 className="text-3xl font-bold bg-clip-text text-fill-transparent bg-gradient-to-r from-purple-600 to-blue-500">TANVIR ALAM</h1>
                </div>
                <ul className="text-white hidden md:flex gap-5 font-semibold">
                    {
                        content
                    }
                </ul>
                <div className="hamburger block md:hidden p-2 bg-white rounded
                bg-gradient-to-r from-purple-600 to-blue-500
                ">
                    <HiOutlineBars3 onClick={() => setShowDropdown(!showDropdown)} className="text-white border border-white font-extrabold p-0" />
                </div>
            </nav>
            <div className="menubar w-40 relative">
                <ul className={`absolute transition ease-in-out duration-1000 ${showDropdown ? " block left-0" : " hidden left-[-40]"} top-0 min-h-screen w-full bg-white md:hidden rounded flex flex-col text-purple-500 px-5 pt-4 gap-2 text-lg font-semibold`}>
                    {
                        content
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;