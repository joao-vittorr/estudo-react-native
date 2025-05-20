import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myform from './components/Myform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Formulário</h1>
      <Myform user={{name: "Josias", email: "josias@gmail.com"}} />
    </>
  )
}

export default App
