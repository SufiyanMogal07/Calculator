import React from 'react'
import Buttons from './Buttons'
import { calculatorContext } from '../Context/Context'
import { useContext } from 'react'


const ButtonBox = ({}) => {
  const {Value, setValue} = useContext(calculatorContext)

  const handleClick = (e) => {
    if(Value.length>13) {
      alert("Max Value Reached")
    }
    else {
      Value.toString()
      setValue((Value)=> (Value.toString()).concat(e.target.innerText))
    }
  }

  const valueClear = () => {
    if(Value!="") {
      let val = Value.toString().substring(0,Value.length-1)
      console.log(val)
      setValue(val)
    }
    else {
      alert("No Input")
    }
  }

  const handleOperation = (e) => {
    const operator = e.target.innerText;
    setValue(Value + operator);
  }

  const handleEvaluate = (e) => {
    if(Value!="" && !Value.endsWith("/0") && !Value.startsWith("/0")) {
      let operators = ['+','-','*','/']
      let result = 0
      let x = Value.toString()
      let v = operators.find((val)=>{
        return x.endsWith(val)
      })
      if(v==undefined) {
        result = eval(x)
      }
      else {
        x = x + "0"
        result = eval(x)
      }
      if(result!="Infinity"){
          setValue(result)
      }
      else {
        alert("You Cannot Divide a Number by 0");
      }
    }

    else {
      setValue("!EROORR");
    }
  }

  let btnValues = [
   {value: "7", clickFunction: handleClick},
   {value: "8", clickFunction: handleClick},
   {value: "9", clickFunction: handleClick},
   {value: "+", clickFunction: handleOperation},
   {value: "4", clickFunction: handleClick},
   {value: "5", clickFunction: handleClick},
   {value: "6", clickFunction: handleClick},
   {value: "-", clickFunction: handleOperation},
   {value: "1", clickFunction: handleClick},
   {value: "2", clickFunction: handleClick},
   {value: "3", clickFunction: handleClick},
   {value: "*", clickFunction: handleOperation},
   {value: "C", clickFunction: valueClear},
   {value: "0", clickFunction: handleClick},
   {value: "/", clickFunction: handleOperation},
   {value: "=", clickFunction: handleEvaluate}
  ]
  return (
    <div className='buttonBox'>
      {btnValues.map((item)=>{
        return <Buttons key={item.value} fnc={item.clickFunction} keyValue={item.value} />
      })}
    </div>
  )
}

export default ButtonBox
