import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ProgressBar from "../Shared/ProgressBar";
import resume from '../../../public/Tanvir_Alam_Resume.pdf';

const About = () => {
    return (
        <div className="common-style px-6 md:px-14 text-white mt-24" id="about">
            <h1 className="text-4xl font-medium mb-20">
                I&apos;m a passionate and dedicated MERN stack developer.<span className="mb-8"></span>
                <br></br>Who creating clean, simple & unique design web applications.
            </h1>
            <div className="flex flex-col md:flex-row justify-between font-sans ">
                <div className="font-nano w-full md:w-1/2 ">
                    <div className="w-full mb-4 md:mb-10">
                        <div className="">
                            <p className="text-base font-">
                                My passion for coding led me to 5 years ago, which is when I started my adventure into the field of web development. Since then, I&apos;ve worked on a variety of personal and business projects to develop my skills, and I&apos;ve mastered the MERN stack (MongoDB, Express.js, React, Node.js). I can create reliable, scalable, and effective full-stack apps because to this potent combination of technologies.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex w-full">
                            <ul className="mt-4 md:mt-0 text-l">
                                <li className="mb-2">
                                    <span>Email : </span>
                                    tanviralamsk47@gmail.com
                                </li>
                                <li>
                                    <span className="text-warp">Phone : </span> +8801957448862
                                    <small> (whatsapp & telegram)</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-14 mb-6">
                        <a href={resume} download="Tanvir Alam Resume">
                            <button className="btn border-2 border-[#7127BA] rounded-none bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-500 to-purple-600 font-bold">Download CV</button>
                        </a>

                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="card w-full mx-auto ps-3 md:ps-10">
                        <ProgressBar name={"JavaScript"} length={"w-9/12"}></ProgressBar>
                        <ProgressBar name={"React"} length={"w-9/12"}></ProgressBar>
                        <ProgressBar name={"Express Js"} length={"w-8/12"}></ProgressBar>
                        <ProgressBar name={"MongoDB"} length={"w-9/12"}></ProgressBar>
                        <ProgressBar name={"MySql"} length={"w-7/12"}></ProgressBar>
                        {/* <ProgressBar name={"Git"} length={"w-6/12"}></ProgressBar> */}
                    </div>
                </div>
            </div>
            {/* border-2 border-sky-300 */}
            <div className=" my-10 common-style font-sans rounded p-5">
                <h3 className="text-2xl font-bold text-center bg-clip-text text-fill-transparent bg-gradient-to-r from-purple-400 to-blue-500">Education</h3>
                <div className="mt-5 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2">
                        <h6 className="">Bachelor of Science in Computer Science And Engineering</h6>
                        <p className="">Daffodil International University</p>
                        <p>December, 2023</p>

                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <p className=""><span className="font-bold">Relevant Courses :</span> Data Structures and Algorithms, Web Development, Database Management, Software Engineering, Operating Systems, Computer Networks, and Artificial Intelligence.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5 mt-8  md:w-1/6 h-16 mx-auto rounded-md">
                <a href="https://github.com/TanvirAlamSk" target="_blank">
                    <FaGithub className="w-8 h-8 rounded-full text-white"></FaGithub>
                </a>

                <a href="https://www.linkedin.com/in/tanvir-alam-55b188264/" target="_blank">
                    <FaLinkedin className="w-8 h-8 text-white"></FaLinkedin>
                </a>
                <a href="https://www.facebook.com/tanvir.alam.7524879" target="_blank">
                    <FaFacebook className="w-8 h-8 rounded-full text-white"></FaFacebook >
                </a>
            </div>
        </div>
    );
};

export default About;