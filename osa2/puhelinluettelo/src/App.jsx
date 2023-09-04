import { useState } from 'react'

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addName}>
          <div>
            name: <input 
              value={props.newName}
              onChange={props.handleNameChange}
            />
          </div>
          <div>
            number: <input 
              value={props.newNumber}
              onChange={props.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
  )
}

const Persons = ({ persons}) => {
  return (
    <div>
      {persons.map(person =>
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (!isNewNameInList()) {
      setPersons(persons.concat(nameObject))  
    } else {
      window.alert(`${newName} is already added to phonebook`)
    } 
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const isNewNameInList = () => {
    for (let i = 0; i < persons.length; ++i){
      if (persons[i].name === newName) {
        return true
      }
    }
    return false
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )

}

export default App