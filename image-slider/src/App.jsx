import { useState } from 'react'
import ImageSlider from './components'
import './App.css'

function App() {

  return (
   <>
   <ImageSlider url="https://picsum.photos/v2/list" limit={4} page={1} />
    </>
  )
}

export default App




