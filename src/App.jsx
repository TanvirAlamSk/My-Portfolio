import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/router'

function App() {

  return (
    <div className='bg-[#11071F] min-h-screen text-white'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
