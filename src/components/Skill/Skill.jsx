import Marquee from "react-fast-marquee";
import cppLogo from "../../assets/skillLogo/c++.png";
import pythonLogo from "../../assets/skillLogo/python-logo.png";
import bootLogo from "../../assets/skillLogo/bootstrap.png";
import tailwindLogo from "../../assets/skillLogo/tailwind.png";
import reactLogo from "../../assets/skillLogo/react.png";
import nodejsLogo from "../../assets/skillLogo/nodejs.png";
import expressJsLogo from "../../assets/skillLogo/express.png";
import mongodbLogo from "../../assets/skillLogo/mongodb.png";
import gitLogo from "../../assets/skillLogo/git.png";
import firebaseLogo from "../../assets/skillLogo/firebase.png";
import figmaLogo from "../../assets/skillLogo/figma.png";

const Skill = () => {
    return (
        <div className="w-full mt-6 bg-transparent bg-opacity-80 pb-8">
            <Marquee gradient={true} gradientColor={[31, 41, 55]} gradientWidth={100}>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-16 mx-2 lg:mx-6 drop-shadow-md brightness-110" src={cppLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-16 mx-2 lg:mx-6 drop-shadow-md brightness-110" src={pythonLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-14 mx-2 lg:mx-6 drop-shadow-md brightness-110" src={bootLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-4 lg:h-10 mx-2 lg:mx-6 drop-shadow-md brightness-75" src={tailwindLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-16 mx-2 lg:mx-6 drop-shadow-md brightness-75" src={reactLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-20 mx-2 lg:mx-6 drop-shadow-md brightness-150" src={nodejsLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-16 mx-2 lg:mx-6 mr-4 lg:mr-8 drop-shadow-md" src={expressJsLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-16 mx-1 lg:mx-3 drop-shadow-md" src={mongodbLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-16 mx-2 lg:mx-6 drop-shadow-md brightness-125" src={gitLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-8 lg:h-16 mx-2 lg:mx-6 drop-shadow-md brightness-125" src={firebaseLogo} alt="" />
                </div>
                <div className="h-10 lg:h-20 flex justify-center items-center">
                    <img className="h-6 lg:h-12 mx-2 lg:mx-6 drop-shadow-md" src={figmaLogo} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Skill;