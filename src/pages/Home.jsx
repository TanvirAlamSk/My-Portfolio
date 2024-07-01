import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Bannar from "../components/Home/Bannar";
import About1 from "../components/Home/About1";
import Skill from "../components/Home/Skill";
import Projects from "../components/Home/Projects";
import ContactMe from "../components/Home/ContactMe";
import Footer from "../components/shared/Footer";

const Home = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div>
            <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown}></Navbar>
            <Bannar></Bannar>
            <About1></About1>
            <Skill></Skill>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;