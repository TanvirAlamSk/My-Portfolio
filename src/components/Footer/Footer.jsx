import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="common-style py-10 bg-[#1C1C40]">

            <div className="flex justify-center gap-5 mt-8">
                <a to="https://github.com/TanvirAlamSk" target="_blank">
                    <FaGithub className="w-8 h-8 rounded-full text-white"></FaGithub>
                </a>
                <a to="https://www.linkedin.com/in/tanvir-alam-55b188264/" target="_blank">
                    <FaLinkedin className="w-8 h-8 text-white"></FaLinkedin>
                </a>
                <a to="https://www.facebook.com/tanvir.alam.7524879" target="_blank">
                    <FaFacebook className="w-8 h-8 rounded-full text-white"></FaFacebook >
                </a>
            </div>
            <hr className="text-white w-5/6 md:w-2/3 mx-auto font-extrabold mt-5"></hr>
            <div className="flex flex-col items-center font-semibold mt-6 font-sans">
                <p>Call Me : +8801957448862</p>
                <p className="text-wrap">Email : tanviralamsk47@gmail.com</p>
                <p>Narail, Dahaka, Bangladesh</p>
            </div>
            <div className="flex justify-center">
                {/* <a href={resume} download="Tanvir Alam Resume" >
                    <button className='btn border-2 border-[#7127BA] px-6 py-2 rounded-md font-semibold mt-8 text-yellow-200'>Download CV</button>
                </a> */}
            </div>
        </div>
    );
};

export default Footer;