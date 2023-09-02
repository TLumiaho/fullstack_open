const Header = (header) => {
  return (
    <div>
      <h1>{header.course}</h1>
    </div>
  )
}

const Content = (content) => {
  return (
    <div>
      {content.parts.map(part => <Part part={part.name} excersises={part.exercises}/>)}
    </div>
  )
}

const Total = (total) => {
  let tot = 0
  total.parts.map(part => tot += part.exercises)
  return (
    <div>
      <p>
        <b>total of {tot} excersises</b>
      </p>
    </div>
  ) 
}

const Part = (part) => {
  return (
    <div>
      <p>
        {part.part} {part.excersises}
      </p>
    </div>
  )
}

const Course = (props) => {
  return (
    <>
      <Header course={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App