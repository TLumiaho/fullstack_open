import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import personService from './services/persons'

const Notification = (props) => {
  const notifiStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  if (props.message === null) {
    return null
  }
  return (
    <div style={notifiStyle}>
      {props.message}
    </div>
  )
}

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

const Persons = ({ persons, deleteObject}) => {
  return (
    <div>
      {persons.map(person =>
        <p key={person.name}>{person.name} {person.number} <button onClick={() => deleteObject(person.name)}> delete </button></p>
      )}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    {name: 'Tuomas Lumiaho', number: '040'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notMes, setNotMes] = useState('error')
  
  useEffect(() => {
    personService
      .getAll()
        .then(allPersons => {
          setPersons(allPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (!isNewNameInList()) {
      personService
        .create(nameObject)
          .then(newPerson => {
            setPersons(persons.concat(newPerson))
            setNotMes(`Added ${newPerson.name}`)
            setTimeout(() => {
              setNotMes(null)
            }, 2000)
            setNewName('')
            setNewNumber('')
        })
      
    } else {
      window.alert(`${newName} is already added to phonebook`)
    } 
  }

  const deleteObject = nameDel => {
    const personToDelete = persons.find(person => person.name === nameDel)
    if (window.confirm(`Poistetaanko henkilö ${nameDel}?`)) {
      personService
        .deleteObject(personToDelete.id)
          .then(response => {
            setPersons(persons.filter(person => person.name !== nameDel))
            setNotMes(`Deleted ${nameDel}`)
            setTimeout(() => {
              setNotMes(null)
            }, 2000)
          })
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
      <Notification message={notMes} />
      <h2>Phonebook</h2>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} deleteObject={deleteObject}/>
    </div>
  )

}

export default App