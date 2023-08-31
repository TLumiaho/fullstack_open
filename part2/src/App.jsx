import { useState } from 'react'

const Button = (props) => (
<button onClick={props.clickHandler}>{props.text} </button>
)

const Display = (props) => (
  <>
    <tr>
      <td>{props.text}</td> <td>{props.num}</td>
    </tr>
  </>
)

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const ave = (props.good - props.bad)/all
  const pos = props.good/all * 100

  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <>
      <table>
        <Display text='good' num={props.good}/>
        <Display text='neutral' num={props.neutral}/>
        <Display text='bad' num={props.bad}/>
        <StatisticLine text='all' num={all}/>
        <StatisticLine text='average' num={ave}/>
        <StatisticLine text='positive' num={pos}/>
      </table>
    </>
  )
}

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <>
        <tr>
          <td>{props.text}</td> <td>{props.num} %</td>
        </tr>
      </>
      
    )
  }
  return (
    <>
      <tr>
        <td>{props.text}</td> <td>{props.num}</td>
      </tr>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodUp = () => setGood(good + 1)
  const neutralUp = () => setNeutral(neutral + 1)
  const badUp = () => setBad(bad + 1)

  return (
    <div>
      <h1><b>give feefback</b></h1>
      <Button clickHandler={goodUp} text='good'/>
      <Button clickHandler={neutralUp} text='neutral'/>
      <Button clickHandler={badUp} text='bad'/>
      <h1><b>statistics</b></h1>
      <Statistics good={good} 
      neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App