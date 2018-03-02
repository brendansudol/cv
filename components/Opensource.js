import React from 'react'

const Opensource = ({ data }) => (
  <div>
    <h2 className="h3 lower">Open-source Projects</h2>
    <div className="h6 bold">18F</div>
    {data['18F'].map((d, i) => (
      <code key={i} className="mb1 block">
        {JSON.stringify(d)}
      </code>
    ))}
    <div className="h6 bold">Personal</div>
    {data['Personal'].map((d, i) => (
      <code key={i} className="mb1 block">
        {JSON.stringify(d)}
      </code>
    ))}
  </div>
)

export default Opensource
