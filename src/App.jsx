import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cost from './component/Cost'
import MyForm from './component/MyForm'

function App() {
const allCosts = [
  {id:1 , type:'laptop',price:20000},
  {id:2 , type:'mobile',price:5000},
  {id:3 , type:'cource',price:300000},
]

  return (
  <div>
    <MyForm/>
 {
  allCosts.map(item => {
    return <Cost key={item.id} data={item}/>
  })
 }
  </div>
 
  )
}

export default App
