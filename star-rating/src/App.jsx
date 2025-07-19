import { useState } from 'react'
import './App.css'
import StarRating from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarRating noOfStar={10}/>
    </>
  )
}

export default App
