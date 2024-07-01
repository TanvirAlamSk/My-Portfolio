/* eslint-disable no-unused-vars */
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    const textColor = "text-[#7127BA]"
    return (
        <div className="flex flex-col md:flex-row md:justify-around items-center common-style mt-10 " id='banner'>
            <div className='w-full md:w-7/12 md:ps-20'>
                <p className="text-base text-yellow-200 font-semibold"></p>
                <h1 className="text-2xl md:text-3xl lg:text-7xl font-normal my-2 text-white">Hi, I am <span className=''>Tanvir Alam</span></h1>
                <h6></h6>
                <div className='hidden md:block bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-500 to-purple-600 lg:text-xl'>
                    <TypeAnimation className=' font-medium md:h-auto '
                        sequence={[
                            'I Am A Programmer',
                            1500,
                            'I Am A Front-End Developer',
                            1500,
                            "I Am A MERN Stack Developer",
                            1000,

                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>

                <div className='block md:hidden h-10 text-5xl'>
                    <TypeAnimation className=''
                        sequence={[
                            'I Am A Programmer',
                            1500,
                            'I Am A Front-End Developer',
                            1500,
                            "I Am A MERN Stack Developer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '20px', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <br></br>


                <button className='btn border-2 border-[#7127BA] rounded-none bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-white'>View Works</button>

            </div>
            <div>
                <img src="https://i.ibb.co/hfWqw8w/photo-2024-06-08-19-57-20-removebg-preview.png"
                    className={` lg:pr-8 p-0 mt-8 md:mt-0 `} alt="Profile_Image" />
            </div>
        </div>
    );
};

export default Banner;