import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"nikhilesh",
    age:22
  }
  let newarr=[1,2,3]

  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-2xl'> tailwind test</h1>
   
  
   <Card username="chaiaurcode" btnText="clickme"/>
   <Card username="nikhilesh"/>
  
  </>
  )
}

export default App
