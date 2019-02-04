import React from 'react'

const Persons = ({ persons, removeName }) => {
  const rows = () => persons.map(person => {
    return (
      <div key={person.id}>{person.name} {person.number}<form onSubmit={() => removeName(person.id)}><button type="submit">poista</button></form>
      </div>
  )
  }
  )
  return (
    <ul>
      {rows()}
    </ul>
  )
}

export default Persons