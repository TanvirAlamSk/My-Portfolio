
const About1 = () => {
    return (
        <div className="common-style">
            <h2 className="text-4xl font-semibold my-10 text-center bg-clip-text text-fill-transparent  bg-gradient-to-r from-[#3BF686] to-[#4CA9FF]">About Me</h2>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center  ">
                <div className="w-full md:w-1/2">
                    <div className="flex w-full font-semibold">
                        <img src="https://i.ibb.co/ByZrcBf/photo-2024-06-08-19-57-20.jpg"
                            className={`rounded-wl lg:pr-8 p-0 mt-8 w-40 md:mt-0 hidden md:block`} alt="Profile_Image" />
                        <ul className="mt-8 md:mt-0 text-lg">
                            <li className="mb-2 ">
                                <span className="">Name : </span>
                                Tanvir Alam
                            </li>
                            <li className="mb-2">
                                <span className="font-">Profile : </span> React Developer
                            </li>
                            <li className="mb-2">
                                <span>Email : </span>
                                tanviralamsk47@gmail.com
                            </li>
                            <li>
                                <span className="text-warp">Phone : </span> +8801957448862
                                {/* <br /> */}
                                <small> (whatsapp & telegram)</small>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="font-semibold  text-sky-0">
                        <p className="text-lg ">I&apos;m a passionate and dedicated React and MERN stack developer. With a strong foundation in web development and a keen eye for detail, I specialize in creating dynamic and responsive web applications that provide excellent user experiences.</p>
                        {/* <h3 className="text-2xl font-bold mb-3">My Journey</h3> */}
                        {/* <p className="text-lg">
                        My passion for coding led me to 5 years ago, which is when I started my adventure into the field of web development. Since then, I&apos;ve worked on a variety of personal and business projects to develop my skills, and I&apos;ve mastered the MERN stack (MongoDB, Express.js, React, Node.js). I can create reliable, scalable, and effective full-stack apps because to this potent combination of technologies.
                    </p> */}
                    </div>
                </div>
            </div>
            <div className=" my-10 common-style border-2 border-sky-300 rounded p-5">
                <h3 className="text-xl font-bold text-center text-[#3BF686]">Education</h3>
                <div className="mt-5 font-semibold flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h6 className="">Bachelor of Science in Computer Science And Engineering</h6>
                        <p className="">Daffodil International University</p>
                        <small>December, 2023</small>

                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <p className=""><span className="font-extrabold">Relevant Courses :</span> Data Structures and Algorithms, Web Development, Database Management, Software Engineering, Operating Systems, Computer Networks, and Artificial Intelligence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;