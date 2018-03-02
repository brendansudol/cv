import React from 'react'

import Heading from './Heading'

const Speaking = ({ data }) => (
  <div>
    <Heading>Speaking</Heading>
    {data.map(({ venue, location, date, title, slides }, i) => (
      <p key={i}>
        {venue}, {location}, {date}, <span className="italic">{title}</span>,{' '}
        <a href={slides}>Slides</a>
      </p>
    ))}
  </div>
)

export default Speaking
