import React from 'react'

const Skills = ({ data }) => (
  <div>
    <h2 className="h3 lower">Skills & Experience</h2>
    {data.map((d, i) => (
      <code key={i} className="mb1 block">
        {JSON.stringify(d)}
      </code>
    ))}
  </div>
)

export default Skills
