import React from 'react'

const PersonForm = ({ addName, newName, newNumber, handleNumberChange, handleNameChange }) => {
    return (
        <form onSubmit={addName}>
            <div>
                nimi: <input
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                numero: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
    )
}

export default PersonForm