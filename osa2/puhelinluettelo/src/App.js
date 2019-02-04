import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numberService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [keyword, setKeyword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    numberService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const removeName = (id) => {
    if (window.confirm(`Haluatko oikeasti poistaa tämän henkilön`)) {
      setErrorMessage(
        `Poistaminen onnistui`
      )
      numberService
        .remove(id)
        .then(remainingPersons => {
          setPersons(remainingPersons)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(keyword))

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value.toLowerCase())
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(p => (p.name.toLowerCase() === newName.toLowerCase()))) {
      if (window.confirm(`${newName} on jo olemassa, korvataanko vanha numero uudella? Ikävä kyllä numeron korvaaminen aiheuttaa järjestelmän kaatumisen, mutta aivan mahtava devaajatiimimme tekee jatkuvasti töitä ongelman ratkaisemiseksi. Numero kuitenkin vaihtuu uuteen. Kokeile poistaa vanha nimi luettelosta ensin.`)) {
        const nameObject = {
          name: newName,
          number: newNumber
        }

        const id = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())[0].id

        numberService
          .update(id, nameObject)
          .then(returnedPersons => {
            setPersons(returnedPersons)
            setErrorMessage(
              `Henkilön ${newName} numero korvattiin`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }

      numberService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setErrorMessage(
            `Lisättiin ${newName}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>

      <Notification message={errorMessage} />

      <Filter keyword={keyword} handleKeywordChange={handleKeywordChange} />

      <h2>lisää uusi</h2>

      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} handleNameChange={handleNameChange} />

      <h2>Numerot</h2>

      <Persons persons={personsToShow} removeName={removeName} />

    </div>
  )

}


export default App