import "./navbar.css"
import resume from '../../public/Tanvir_Alam_Resume.pdf'

const Navbar = () => {
    // const [showDropdown, setShowDropdown] = useState(false)
    const textStyle = "bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-300 to-purple-400 "
    // bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-500 to-purple-600
    const content = <>
        <li className={`${textStyle} font-bold text-[15px]`}>
            <a href="/">Home</a>
        </li>
        <li className={`${textStyle} font-bold text-[15px]`}>
            <a href="#about">About</a>
        </li>
        <li className={`${textStyle} font-bold text-[15px]`}>
            <a href="#skill">Skills</a>
        </li>
        <li className={`${textStyle} font-bold text-[15px]`}>
            <a href="#projects">Projects</a>
        </li>
        <li className={`${textStyle} font-bold text-[15px]`}>
            <a href="#contact">Contact Me</a>
        </li>
    </>
    return (
        <div className="navbar  text-white pt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl">
                        {
                            content
                        }
                    </ul>
                </div>
                <a className="text-[28px] font-bold bg-clip-text text-fill-transparent bg-gradient-to-r from-purple-400 to-blue-500">TANVIR.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold ">
                    {
                        content
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume} download="Tanvir Alam Resume" >
                    <button className={`btn btn-sm md:btn-md border-2 border-[#7127BA] rounded-none ${textStyle} font-bold`}>Download CV</button>
                </a>

            </div>
        </div>
    );
};

export default Navbar;