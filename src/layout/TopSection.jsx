import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill/Skill";
import "./TopSection.css"

const TopSection = () => {
    return (
        <div className="top-section px-5">
            <Navbar></Navbar>
            <Banner></Banner>
            <Skill></Skill>
        </div>
    );
};

export default TopSection;