import { useState } from "react";
import Navbar from "../components/shared/Navbar";

const Home = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div>
            <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown}></Navbar>
        </div>
    );
};

export default Home;