import React from 'react'

const Skills = ({ data }) => (
  <div>
    <h2 className="mb2 h3">Skills & Experience</h2>
    <p>{data.join(', ')}</p>
  </div>
)

export default Skills
