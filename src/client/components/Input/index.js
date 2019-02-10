import React from 'react'

const Input = ({ id, field, value, onBlur, onHandleChange, onKeyPress }) => (
  <input 
    defaultValue={value}
    onBlur={() => onBlur()} 
    onChange={(e) => onHandleChange(id, field, e.target.value)} 
    onKeyPress={(e) => onKeyPress(e)} 
    type='text' 
  />
)

export default Input