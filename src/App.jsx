
import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App(){

  let [length,setLegth]=useState(8);
  let [number,SetNumberAllow]=useState("false");
  let [charater,setCharterAllow]=useState("false");
  let [Password,setPassword]=useState("");
  
  //useRef hook
  const passwordRef= useRef(null);

  let passwordGenter=useCallback(()=>{
    let pass=""
    let str="QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp"
    if(SetNumberAllow) str=str+"1234567890"
    if(setCharterAllow) str=str+"!@#$%^&*"

  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)
  }
  
  setPassword(pass);
 
  },[length,number,charater])

  let copyPasswordkeyboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password) },[Password])


  useEffect(()=>{passwordGenter()},[length,number,charater,passwordGenter])


  return (
    <div className='bg-gray-500 m-20'> 
      <h1 className=' text-3xl text-white text-center m-2 p-2'>Password Genertor</h1>
      <div className='m-4 p-3 pb-0'>
        <input type="text" readOnly  ref={passwordRef}
         placeholder='  Password'
         className='bg-white text-2xl text-black rounded-l-2xl p-1'
         value={Password}
        />
        <button className='bg-blue-500 text-1xl h-10 p-3 text-white rounded-r-2xl    hover:bg-amber-200 active:bg-red-500' onClick={copyPasswordkeyboard}>copy</button>
      </div>
      <div className=' text-orange-300'>
       <input type="range" className='m-3' min={6} max={50} value={length}
       onChange={(e)=>{setLegth(e.target.value)}}/>
       <label className="p-2" htmlFor="length">Length: {length}</label>


       <input type="checkbox" onChange={()=>{SetNumberAllow((pre)=>!pre)}} />
       <label htmlFor="" 
       className='m-2'>Number</label>

       <input type="checkbox" onchange={()=>{setCharterAllow((prel)=>!prel)}}/>
       <label htmlFor="" className='m-2'>Character</label>
      </div>
    </div>
  )
} 

export default App