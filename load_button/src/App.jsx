import { useState } from 'react'
import './App.css'
import LoadMoreData from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoadMoreData/>
    </>
  )
}

export default App
