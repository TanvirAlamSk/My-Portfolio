import "./App.css";
import About from "./components/About/About";
import Contract from "./components/Contract/Contract";
import Footer from "./components/Footer/Footer";
import MyWorks from "./components/MyWorks/MyWorks";
import TopSection from './layout/TopSection';
function App() {
  return (
    <div className='bg-[#11071F]'>
      <TopSection></TopSection>
      <About></About>
      <MyWorks></MyWorks>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  )
}

export default App
