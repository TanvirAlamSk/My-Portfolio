import { TypeAnimation } from 'react-type-animation';
import resume from "../../assets/pdf/Profile.pdf"

const Bannar = () => {

    const downloadCV = () => {
        console.log("hi")
    }
    return (
        <div className="flex flex-col md:flex-row md:justify-around items-center home-element my-20">
            <div className='w-full md:w-6/12 md:ps-20'>
                <p className="text-base text-yellow-200">Hi,</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-2">I am <span className='text-[#7127BA]'>Tanvir Alam</span></h1>
                <h6></h6>
                <div className='hidden md:block'>
                    <TypeAnimation className=' font-medium md:h-auto'
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


                <div className='block md:hidden h-20'>
                    <TypeAnimation className=''
                        sequence={[
                            'I Am A Programmer',
                            1500, // wait 1s before replacing "Mice" with "Hamsters"
                            'I Am A Front-End Developer',
                            1500,
                            "I Am A MERN Stack Developer",
                            1000,
                            // 'We produce food for Chinchillas',
                            // 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '20px', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                {/*  */}
                <br></br>

                <a href={resume} download="Tanvir Alam Resume" >
                    <button onClick={downloadCV} className='btn border-2 border-[#7127BA] px-6 py-2 rounded-md font-semibold mt-8 text-yellow-200'>Download CV</button>
                </a>
            </div>
            <div>
                <img src="https://i.ibb.co/ByZrcBf/photo-2024-06-08-19-57-20.jpg"
                    className="rounded-full lg:pr-8 p-0 mt-8 md:mt-0" alt="Profile_Image" />
            </div>
        </div>
    );
};

export default Bannar;