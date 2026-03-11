import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import News from './Page/News'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Navbar/>
  <News/>
   </>
  )
}

export default App
