import React from 'react'

const Buttons = ({keyValue, fnc}) => {
 
  return (
    <button onClick={(e)=> {fnc(e)}} className='primary-btn circular-b'>
        {keyValue}
    </button>
  )
}

export default Buttons
