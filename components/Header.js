import React from 'react'

const Header = ({ name, phone, email, website }) => (
  <div>
    <h1 className="mt0 mb05 h2 lower">{name}</h1>
    <div className="mb1 h6">
      <span>{phone}</span>
      {' / '}
      <span>{email}</span>
      {' / '}
      <span>{website.display}</span>
    </div>
  </div>
)

export default Header
