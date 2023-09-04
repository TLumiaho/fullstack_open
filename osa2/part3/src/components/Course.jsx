const Header = (header) => {
    return (
      <div>
        <h2>{header.course}</h2>
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
        <h1><b>Web development curriculum</b></h1>
        {props.courses.map(course =>
          <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
          </div>
        )}
      </>
    )
  }

export default Course