import React from 'react'

const Speaking = ({ data }) => (
  <div>
    <h2 className="mb2 h3">Speaking</h2>
    {data.map(({ venue, location, date, title, slides }, i) => (
      <p key={i}>
        {venue}, {location}, {date}, <span className="italic">{title}</span>,{' '}
        <a href={slides}>Slides</a>
      </p>
    ))}
  </div>
)

export default Speaking
