import React from 'react'

const Button = ({handleInc,handleDec}) => {
  return (
    <div>
        <button data-testid="inc" onClick={handleInc}>Add</button>
        <button data-testid="dec" onClick={handleDec}>Reduce</button>
    </div>
  )
}

export default Button