import React from 'react'

const ListOfVariables = ({variables, getVariable}) => (
  <li onClick={() => getVariable(variables)} style={{cursor: 'pointer'}}>
    {variables.text}
  </li>
)

export { ListOfVariables } 