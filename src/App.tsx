import {useState} from "react";import './App.css'
import Recipe from "./components/recipe/Recipe"
import React from 'react'




function App() {
  const [count, setCount] = useState(0)

  return (
      <Recipe />
  )
}

export default App
