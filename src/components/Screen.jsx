import React, { useEffect } from 'react'
import { calculatorContext } from '../Context/Context'
import { useContext } from 'react'


const Screen = () => {
   
  const screenValue = useContext(calculatorContext)
  
  return (
    <div className="screen circular-b">
        <span>{screenValue.Value}</span>
    </div>
  )
}

export default Screen
