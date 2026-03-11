import { useState } from 'react'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import News from './Page/News'
import Category from './components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Navbar/>
  <Category className = "py-10"/>
  <News/>
   </>
  )
}

export default App
