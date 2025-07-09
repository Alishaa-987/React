import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
        <div>
       <img
  src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
  alt="test"
className="ml-5 h-10 w-8"
/>

        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">Bored ape nft accidental</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>

<h1 className="text-3xl font-bold text-red-600 underline">Hello Tailwind</h1>

        
    </>
  )
}

export default App
