import React from 'react'

const Filter = ({ keyword, handleKeywordChange }) => {
    return (
        <form>
            <div>
                hakusana: <input
                    value={keyword}
                    onChange={handleKeywordChange}
                />
            </div>
        </form>
    )
}

export default Filter