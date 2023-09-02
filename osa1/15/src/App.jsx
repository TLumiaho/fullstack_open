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
      <Part part={content.parts[0].name} excersises={content.parts[0].exercises}/>
      <Part part={content.parts[1].name} excersises={content.parts[1].exercises}/>
      <Part part={content.parts[2].name} excersises={content.parts[2].exercises}/>
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>
        Number of excersises {total.parts[0].exercises + 
        total.parts[1].exercises + total.parts[2].exercises}
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
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App