import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return (
 <Statistics value = {props.value}/>
  )
 }

 

const Statistics = (props) => {
// displayt eri statseiille
  return (
  <>  
    {props.value}
   </> 
  )
}
  
  



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avr, setAvr] = useState(0)
  const [pos, setPos] = useState(0)
  let feedback = false
  const goodToValue = props =>  {
    
    setGood(props)
    setAll(all +1)
    setAverageTo()
    console.log(good)
  }
  const neutralToValue = props =>  {
    
    setNeutral(props)
    setAll(all +1)
    setAverageTo()
    console.log(neutral)
  }
  const badToValue = props =>  {
    
    setBad(props)
    setAll(all +1)
    setAverageTo()
    console.log(bad)
  }

  const setAverageTo = () => {
    let keskiarvo = ((good - bad )/ all)
    setAvr(keskiarvo)
    setPositiveTo()
  }
  const setPositiveTo = () => {
    var hyvat = (good/all)
    setPos(hyvat*100)
  }

return (
    <div>
     <h1>Give feedback please!</h1>
     <Button handleClick={() => goodToValue(good + 1)} text="good" />
     <Button handleClick={() => neutralToValue(neutral + 1)} text="neutral" />
     <Button handleClick={() => badToValue(bad + 1)} text="bad" />
     <h2>Statistics</h2>
     <table >  
        <tbody>
        <tr>
          <td><StatisticsLine value="good"/></td>
          <td><StatisticsLine value= {good}/></td>
        </tr> 
        <tr>
          <td><StatisticsLine value="neutral"/></td>
          <td><StatisticsLine value= {neutral}/></td>
        </tr> 
        <tr>
          <td><StatisticsLine value="bad"/></td>
          <td><StatisticsLine value= {bad}/></td>
        </tr> 
        <tr>
          <td><StatisticsLine value="average"/></td>
          <td><StatisticsLine value= {avr}/></td>
        </tr> 
        <tr>
          <td><StatisticsLine value="positive"/></td>
          <td><StatisticsLine value= {pos}/></td>
        </tr> 
      
        </tbody>
     </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
