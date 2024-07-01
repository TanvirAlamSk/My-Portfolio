import project1 from '../../assets/projectImage/project1.jpg';
// import project2 from '../../assets/projectImage/project2.jpg';
import project3 from '../../assets/projectImage/project3.jpg';
import { FaGithub } from "react-icons/fa";
import './MyWorks.css'

const MyWorks = () => {
    return (
        <div className=" bg-[#1C1C40] pt-10 font-sans">
            <h2 className="text-4xl font-semibold my-10 ps-12  bg-clip-text text-fill-transparent bg-gradient-to-r from-[#4CA9FF] to-[#3BF686] ">My Works</h2>
            <div className="common-style px-8 md:px-20" id='projects'>
                <div className="md:mx-10">
                    <div className='flex flex-col md:flex-row justify-between gap-8 mb-20'>
                        <div className='w-full md:w-1/2 h-80 overflow-auto scrollSection'>
                            <img src={project1} className='w-11/12 rounded-lg' alt=""></img>
                        </div>
                        <div className='w-full md:w-1/2 ps-4 flex flex-col justify-between'>
                            <div>
                                <h3 className='text-3xl md:float-end mb-2 font-semibold text-white'>Recipe Easy</h3>
                                <p className='text-lg md:float-end'>A user-friendly platform to browse, share, and create a wide variety of recipes.</p>
                            </div>

                            <br></br>
                            <div className='mb-10 flex flex-col md:flex-row justify-between'>
                                <a href="https://recipe-easy.vercel.app/">
                                    {/* <button className='px-8 py-2 font-semibold bg-gradient-to-r from-[#13ADC7] to-[#945DD6]'>Live Link</button> */}

                                    <button className="px-6 py-2 border-2 border-[#7127BA] rounded-none bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-500 to-purple-600 font-bold">Live Link</button>
                                </a>
                                <div className='flex md:justify-center items-center gap-1 mt-5 md:mt-0'>
                                    <FaGithub className='w-6 h-6' />
                                    <a href='https://github.com/TanvirAlamSk/stride-wave-assignment'
                                        className='text-lg font-bold'>Client</a>
                                    <div className='w-0.5 h-6 bg-white'></div>
                                    <a href="https://github.com/TanvirAlamSk/stride-wave-assignment-server"
                                        className='text-lg font-semibold'>Server</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row-reverse  justify-between gap-8 pb-10'>
                        <div className='w-full md:w-1/2 h-80 overflow-auto scrollSection'>
                            <img src={project3} className='w-11/12 rounded-lg' alt=""></img>
                        </div>
                        <div className='w-full md:w-1/2 md:ps-4 flex flex-col justify-between'>
                            <div>
                                <h3 className='text-3xl mb-2 font-semibold text-white'>LexisArt</h3>
                                <p className='text-lg md:float-end'>&quot;LexisArt&quot;  This site targets those who crave a personalized touch in their home design.

                                    Upon landing, you&apos;re met with a bright and interactive interface. A quiz pops up, asking questions about your design style (modern, minimalist, bohemian, etc.), budget, and the room you want to tackle. Based on your answers, the site curates a mood board filled with inspiring color palettes, furniture suggestions, and decor ideas.</p>
                            </div>

                            <br></br>
                            <div className='mb-10 flex flex-col md:flex-row justify-between'>
                                <a href="https://lexisart-14e46.web.app/" target='_blank'>
                                    <button className="px-6 py-2 border-2 border-[#7127BA] rounded-none bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-500 to-purple-600 font-bold">Live Link</button>
                                </a>
                                <div className='flex md:justify-center mt-5 md:mt-0 items-center gap-1'>
                                    <FaGithub className='w-6 h-6' />
                                    <a href="https://github.com/TanvirAlamSk/Lexis-Art-Client"
                                        className='text-lg font-bold'>Client</a>
                                    <div className='w-0.5 h-6 bg-white'></div>
                                    <a href="https://github.com/TanvirAlamSk/Lexis-Art-Server"
                                        className='text-lg font-semibold'>Server</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;