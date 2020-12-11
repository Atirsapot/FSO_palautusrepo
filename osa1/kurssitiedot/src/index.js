import React from 'react'
import ReactDOM from 'react-dom'


  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  
const Header = (props) => {
    return (
      <>
        <h1>{course.name} </h1>
      </>
    )
  }
const Content = (props) => {
    return (
      <>
      <Part parts ={course.parts[0]}/>
      <Part parts ={course.parts[1]}/>
      <Part parts ={course.parts[2]}/> 
      </>
    )
  } 
const Part = (props) => {
    return (
      <>
      <p>{course.parts.name +' ' +  course.parts.exercises}</p>
      </>
    )
  }
const Total = (props) => {
    return (
      <>
      <p>
       Number of excersises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </p>
      </>
    )
  }  
  return (
    <div>
      <Header course ={course}/>
      <Content parts ={course} />
      <Total total ={course}/>
    </div>
  )  
}
ReactDOM.render(<App />, document.getElementById('root'))