import './App.css'
// import About from './components/Home/About'
import About1 from './components/Home/About1'
import Bannar from './components/Home/Bannar'
import Skill from './components/Home/Skill'
import Home from './pages/Home'


function App() {

  return (
    <div className='bg-[#11071F] min-h-screen text-white'>
      <Home></Home>
      <Bannar></Bannar>
      {/* <About></About> */}
      <About1></About1>
      <Skill></Skill>
    </div>
  )
}

export default App
