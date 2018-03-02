import React from 'react'

const WorkHistory = ({ data }) => (
  <div>
    <h2 className="h3 lower">Work History</h2>
    {data.map((d, i) => (
      <code key={i} className="mb1 block">
        {JSON.stringify(d)}
      </code>
    ))}
  </div>
)

export default WorkHistory
