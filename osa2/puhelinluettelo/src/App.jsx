import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }, { name: 'Tuomas Lumiaho'}
  ]) 
  const [newName, setNewName] = useState('')

  const [nameInList, setNameInList] = useState(false)
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p>{person.name}</p>
      )}
    </div>
  )

}

export default App