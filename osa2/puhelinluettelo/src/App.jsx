import { useState } from 'react'

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
    console.log(!isNewNameInList())
    console.log(newName, 'newname')
    console.log(nameObject.name)
    console.log(persons)

    if (!isNewNameInList()) {
      setPersons(persons.concat(nameObject))  
    } else {
      window.alert(`${newName} is already added to phonebook`)
    } 
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const isNewNameInList = () => {
    for (let i = 0; i < persons.length; ++i){
      console.log(i, '= i', persons[i].name)
      if (persons[i].name === newName) {
        return true
      }
    }
    return false
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p>{person.name} {person.number}</p>
      )}
    </div>
  )

}

export default App