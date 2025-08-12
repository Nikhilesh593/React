import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  console.log("Current Color:", color); 

  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: color }}>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: "orange" }}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
