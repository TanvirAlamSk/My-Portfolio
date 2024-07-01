import { RiStarSLine } from "react-icons/ri";
const About = () => {
    return (
        <div className="my-16 common-style ">
            <h2 className="text-4xl font-semibold text-center mt-16">About Me</h2>
            <p className="text-xl font-medium my-10 text-yellow-200"> I&apos;m a passionate and dedicated React and MERN stack developer. With a strong foundation in web development and a keen eye for detail, I specialize in creating dynamic and responsive web applications that provide excellent user experiences.</p>
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl text-center font-bold mb-3">My Journey</h3>
                    <p className="text-lg">
                        My passion for coding led me to 5 years ago, which is when I started my adventure into the field of web development. Since then, I&apos;ve worked on a variety of personal and business projects to develop my skills, and I&apos;ve mastered the MERN stack (MongoDB, Express.js, React, Node.js). I can create reliable, scalable, and effective full-stack apps because to this potent combination of technologies.
                    </p>
                </div>
                <div className="w-full md:w-1/2 float-right">
                    <h3 className="text-2xl text-center font-bold mb-3 ">Education</h3>
                    <h6 className="text-xl">Bachelor of Science in Computer Science And Engineering</h6>
                    <p className="text-lg">Daffodil International University</p>
                    <small>December,2023</small>

                    <p className=""><span className="font-bold">Relevant Courses :</span> Data Structures and Algorithms, Web Development, Database Management, Software Engineering, Operating Systems, Computer Networks, and Artificial Intelligence.</p>
                </div>
            </div>
            <div>
                <RiStarSLine className="w-8 h-8 text-blue-500 bg-clip-text text-fill-transparent bg-gradient-to-r from-purple-600 to-blue-500" />
            </div>
        </div>
    );
};

export default About;