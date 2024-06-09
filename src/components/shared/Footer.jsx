import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="common-style py-10">
            <hr className="text-white w-5/6 md:w-2/3 mx-auto font-extrabold"></hr>
            <div className="flex justify-center gap-5 mt-8">
                <FaGithub className="w-8 h-8"></FaGithub>
                <FaLinkedin className="w-8 h-8"></FaLinkedin>
                <FaFacebook className="w-8 h-8"></FaFacebook >
            </div>
            <div></div>
        </div>
    );
};

export default Footer;