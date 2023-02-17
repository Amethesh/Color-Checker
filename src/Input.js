import React from 'react'
import colorNames from 'colornames'

const Input = ({colorName,setColorName,setHexValue,isDarkText,setIsDarkText}) => {
  return (
    <form className='colorInput' onSubmit={(e) => e.preventDefault()}>
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Add color name'
        value={colorName}
        onChange={(e) => {
            setColorName(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
        />

        <button
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
        >Toggle Text Color </button>
    </form>
  )
}

export default Input