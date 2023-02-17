import React from 'react'

const Square = ({colorName, hexValue,isDarkText}) => {
  return (
    <div className='colorBox' 
        style={{
            backgroundColor:colorName,
            color: isDarkText ? '#000' : '#FFF'
        }}>    

        <p> {colorName ? colorName : "Empty value"} </p>
        <p> {hexValue ? hexValue : null}</p>
    </div>
  )
}

Square.defaultProps = {
    colorName: "Empty"
}

export default Square