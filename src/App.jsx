import './App.css'
// import About from './components/Home/About'
import About1 from './components/Home/About1'
import Bannar from './components/Home/Bannar'
import ContactMe from './components/Home/ContactMe'
import Projects from './components/Home/Projects'
import Skill from './components/Home/Skill'
import Home from './pages/Home'


function App() {

  return (
    <div className='bg-[#11071F] min-h-screen text-white'>
      <Home></Home>
      <Bannar></Bannar>
      <About1></About1>
      <Skill></Skill>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  )
}

export default App
