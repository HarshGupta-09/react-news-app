import { useState } from 'react'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import News from './Page/News'
import Category from './components/Category'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Navbar className='sticky top-0 z-20'/>
  <Category className = "py-10"/>
  <News className= "pb-10"/>
  <Footer/>
   </>
  )
}

export default App
