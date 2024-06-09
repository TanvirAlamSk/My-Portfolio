import project1 from '../../assets/project/progect1.jpg';
import { FaGithub } from "react-icons/fa";
import './Projects.css'

const Projects = () => {
    return (
        <div className="common-style">
            <h2 className="text-4xl font-semibold my-10 text-center bg-clip-text text-fill-transparent  bg-gradient-to-r from-[#3BF686] to-[#4CA9FF]">My Projects</h2>
            <div className="md:mx-10">
                <div className='flex flex-col md:flex-row justify-between gap-8 mb-20'>
                    <div className='w-full md:w-1/2 h-80 overflow-auto scrollSection'>
                        <img src={project1} className='w-11/12 rounded-lg' alt=""></img>
                    </div>
                    <div className='w-full md:w-1/2 ps-4 flex flex-col justify-between'>
                        <div>
                            <h3 className='text-3xl md:float-end'>Recipe Easy</h3>
                            <p className='text-lg md:float-end'>A user-friendly platform to browse, share, and create a wide variety of recipes.</p>
                        </div>

                        <br></br>
                        <div className='mb-10 flex flex-col md:flex-row justify-between'>
                            <button className='px-8 py-2 rounded-3xl font-semibold bg-gradient-to-r from-[#13ADC7] to-[#945DD6]'>Live Link</button>
                            <div className='flex justify-center items-center gap-1'>
                                <FaGithub className='w-6 h-6' />
                                <p className='text-lg font-bold'>Client</p>
                                <div className='w-0.5 h-6 bg-white'></div>
                                <p className='text-lg font-semibold'>Server</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse  justify-between md:gap-8 mb-20'>
                    <div className='w-full md:w-1/2 h-80 overflow-auto scrollSection'>
                        <img src={project1} className='w-11/12 rounded-lg' alt=""></img>
                    </div>
                    <div className='w-full md:w-1/2 md:ps-4 flex flex-col justify-between'>
                        <div>
                            <h3 className='text-3xl md:float-end'>Recipe Easy</h3>
                            <p className='text-lg md:float-end'>A user-friendly platform to browse, share, and create a wide variety of recipes.</p>
                        </div>

                        <br></br>
                        <div className='mb-10 flex flex-col md:flex-row justify-between'>
                            <button className='px-8 py-2 rounded-3xl font-semibold bg-gradient-to-r from-[#13ADC7] to-[#945DD6]'>Live Link</button>
                            <div className='flex justify-center items-center gap-1'>
                                <FaGithub className='w-6 h-6' />
                                <p className='text-lg font-bold'>Client</p>
                                <div className='w-0.5 h-6 bg-white'></div>
                                <p className='text-lg font-semibold'>Server</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;