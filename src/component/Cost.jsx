import React, { useState } from 'react'

const Cost = () => {
 const [number , setNumber] = useState(0)
  const clickHandler =()=>{
    setNumber(number + 1)
  }
  const clickHandler1 =()=>{
    if (number > 0){
      setNumber(number - 1)
    }
    
  }
  return (
    <div>
        <button onClick={clickHandler}>incprice</button>
        <button onClick={clickHandler1}>decprice</button>
    </div>
  )
}

export default Cost
