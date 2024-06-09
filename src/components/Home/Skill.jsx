import ProgressBar from "../shared/ProgressBar";
import { TbPointFilled } from "react-icons/tb";

const Skill = () => {
    return (
        <div className="py-10 common-style ">
            <h1 className="text-3xl font-bold text-center bg-clip-text text-fill-transparent  bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] mt-8">Skills</h1>

            <div className="w-full">
                <p className="text-3xl font-bold mb-8 my-3">Technologies</p>
                <div className="card w-full mx-auto ps-3 md:ps-10">
                    <ProgressBar name={"Html"} length={"w-11/12"}></ProgressBar>
                    <ProgressBar name={"CSS, Bootstrap & Tailwind CSS"} length={"w-10/12"}></ProgressBar>
                    <ProgressBar name={"JavaScript"} length={"w-9/12"}></ProgressBar>
                    <ProgressBar name={"React"} length={"w-9/12"}></ProgressBar>
                    <ProgressBar name={"Express Js"} length={"w-8/12"}></ProgressBar>
                    <ProgressBar name={"MongoDB"} length={"w-9/12"}></ProgressBar>
                    <ProgressBar name={"MySql"} length={"w-7/12"}></ProgressBar>
                    <ProgressBar name={"Git"} length={"w-6/12"}></ProgressBar>
                </div>
                <p className="text-2xl font-bold my-10">Additional technologies and skills</p>
                <div className="ps-3 md:ps-10">
                    <ul className="font-semibold text-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <li><TbPointFilled className="text-white inline" /> Communication </li>
                        <li> <TbPointFilled className="text-white inline" /> Good Manners</li>
                        <li> <TbPointFilled className="text-white inline" /> Positive Attitude</li>
                        <li> <TbPointFilled className="text-white inline" /> Teamwork</li>
                        <li> <TbPointFilled className="text-white inline" /> Positive Attitude</li>
                        <li> <TbPointFilled className="text-white inline" /> Teamwork</li>
                        <li> <TbPointFilled className="text-white inline" /> Time Management</li>
                        <li> <TbPointFilled className="text-white inline" /> Common Sense</li>
                        <li> <TbPointFilled className="text-white inline" />
                            Active Listening</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skill;