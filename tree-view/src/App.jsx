import { useState } from 'react'
import './App.css'
import MenuList from './components/menu-list'
import MenuItem from './components/menu-item'
import  TreeView from'./components/index.jsx'
import  menus from'./components/data.js'
function App() {

  return (
    <>
    <TreeView menus={menus} /> 
    </>
  )
}

export default App
