import './index.css'
import './App.css'
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("Olive")
  
return   (
    
    <div className="w-full h-screen"  style = {{background:color}}>           
      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center shadow-lg bg-white rounded-full gap-3'>
          <button onClick = {() => setColor("red")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style = {{background:"red"}} >           

         Red </button>

         <button onClick = {() => setColor("Green")} 
            className="outline-none rounded-full text-white shadow-lg px-4 py-2"  style = {{background:"green"}} >           

         Green </button>

         <button onClick = {() => setColor("Cyan")} 
            className="outline-none rounded-full text-white shadow-lg px-4 py-2"  style = {{background:"cyan"}} >           

         Cyan </button><button onClick = {() => setColor("Blue")} 
            className="outline-none  rounded-full text-white shadow-lg px-4 py-2"  style = {{background:"blue"}} >           

         Blue </button>
        </div>

      </div>

      </div>

    
   );
}

export default App
