import React, { useEffect } from "react"
import { useState } from "react"
import Wrapper from "./components/Wrapper"
import { calculatorContext } from "./Context/Context"


function App() {
  const [Value, setValue] = useState("")
  
  return (
    <>
     <calculatorContext.Provider value={{Value,setValue}}>
      
     <div className="container">
      <Wrapper/>
     </div>
     </calculatorContext.Provider>
    </>
  )
}

export default App
