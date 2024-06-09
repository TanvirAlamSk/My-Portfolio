import project1 from '../../assets/project/progect1.jpg';
import './Projects.css'
const Projects = () => {
    return (
        <div className="common-style">
            <h2 className="text-4xl font-semibold my-10 text-center bg-clip-text text-fill-transparent  bg-gradient-to-r from-[#3BF686] to-[#4CA9FF]">My Projects</h2>
            <div className="mx-10">
                <div className='flex flex-col md:flex-row justify-between gap-8 mb-20'>
                    <div className='w-1/2 h-80 overflow-auto scrollSection'>
                        <img src={project1} className='w-11/12 rounded-lg' alt=""></img>
                    </div>
                    <div className='w-1/2 ps-4 flex flex-col justify-between'>
                        <div>
                            <h3 className='text-3xl float-end'>Recipe Easy</h3>
                            <p className='text-lg float-end'>A user-friendly platform to browse, share, and create a wide variety of recipes.</p>
                        </div>

                        <br></br>
                        <div className='mb-10 flex justify-between'>
                            <button className='px-8 py-2 rounded-3xl font-semibold bg-gradient-to-r from-[#13ADC7] to-[#945DD6]'>Live Link</button>
                            <div className='flex items-center gap-1'>
                                <p className='font-semibold'>Client</p>
                                <div className='w-0.5 h-6 bg-white'></div>
                                <p className='font-semibold'>Server</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse  justify-between gap-8 mb-20'>
                    <div className='w-1/2 h-80 overflow-auto scrollSection'>
                        <img src={project1} className='w-11/12 rounded-lg' alt=""></img>
                    </div>
                    <div className='w-1/2 ps-4'>
                        <h3 className='text-3xl float-end'>Recipe Easy</h3>
                        <p className='text-lg float-end'>A user-friendly platform to browse, share, and create a wide variety of recipes.</p>
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aspernatur, vitae aut hic debitis, nulla error temporibus corporis placeat reprehenderit dicta officiis exercitationem. Enim sunt nam non, consectetur vel eos!
                </div>
            </div>
        </div>
    );
};

export default Projects;