import React from 'react'

const HeaderTable = ({ customers, children }) => (
  Array.isArray(customers) && customers.length > 0 ?
    <table className='table-fill'>
      <thead>
        <tr>
          <th className='text-left'>Name</th>
          <th className='text-left'>Email</th>
        </tr>
      </thead>
      <tbody className='table-hover'>
        {children}
      </tbody>
    </table> : <h1>The list of customers is empty</h1>
)

export default HeaderTable