import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import resume from '../../assets/pdf/Profile.pdf';
const Footer = () => {
    return (
        <div className="common-style py-10">
            <hr className="text-white w-5/6 md:w-2/3 mx-auto font-extrabold"></hr>
            <div className="flex justify-center gap-5 mt-8">
                <FaGithub className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></FaGithub>
                <FaLinkedin className="w-8 h-8 bg-blue-500"></FaLinkedin>
                <FaFacebook className="w-8 h-8 rounded-full bg-blue-500"></FaFacebook >
            </div>
            <div className="flex flex-col items-center font-semibold mt-6">
                <p>Call Me : +8801957448862</p>
                <p className="text-wrap">Email : tanviralamsk47@gmail.com</p>
                <p>Narail, Dahaka, Bangladesh</p>
            </div>
            <div className="flex justify-center">
                <a href={resume} download="Tanvir Alam Resume" >
                    <button className='btn border-2 border-[#7127BA] px-6 py-2 rounded-md font-semibold mt-8 text-yellow-200'>Download CV</button>
                </a>
            </div>
        </div>
    );
};

export default Footer;