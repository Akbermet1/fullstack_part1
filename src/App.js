import React from 'react'

const Header = (props) => {
  return (
  <div>
    <h1>{props.name}</h1>
  </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.name} {props.exercises} </p>
    </div>
  )
}

const Content = (props) => {
  const [first, second, third] = props.course.parts;
  console.log(first, second, third);
  return (
    <div>
    <Part name={first.name} exercises={first.exercises}/>
    <Part name={second.name} exercises={second.exercises}/>
    <Part name={third.name} exercises={third.exercises}/>
    </div>
  )
}

const Total = (props) => {
  const [first, second, third] = props.course.parts;
  return (
  <div>
    <p> Number of exercises {first.exercises + second.exercises + third.exercises} </p>
  </div>
  )
}

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


  return (
    <div>
      <Header name={course.name}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App