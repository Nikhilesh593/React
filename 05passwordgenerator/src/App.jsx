import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length ,setlength]=useState(8)
  const[numberallowed,setnumberallowed]=useState(false)
  const[charallowed,setcharallowed]=useState(false)
  const[password,setpassword]=useState("")


  const passwordgenerator= useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+='0123456789'
    if(charallowed) str+='!@#$%^&*()~{}[]'

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass += str .charAt(char)

    }
    setpassword(pass)


  } ,[length,numberallowed,charallowed])
  useEffect(()=>{
    passwordgenerator()

  },[length,numberallowed,charallowed,passwordgenerator ])


  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className="text-white text-center">Password generator</h1>

    <div className='className="flex shadow rounded-lg overflow-hidden mb-4' >
      <input
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 bg-amber-50'
      placeholder='password'
      readOnly
      />

      <button
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />

          <label >Length :{length}</label>
        </div>

        <div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberallowed}
            id='numberInput'
         
          onChange={()=>{
            numberallowed((prev)=>!prev)
          }}
          />

        <label htmlFor="numberInput">NUmbers</label>

          </div>
        </div>

        <div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charallowed}
            id='characterInput'
         
          onChange={()=>{
            setcharallowed((prev)=>!prev)
          }}
          />

        <label htmlFor="characterInput">character</label>

          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default App
