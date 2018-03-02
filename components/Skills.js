import React from 'react'

import Heading from './Heading'

const Skills = ({ data }) => (
  <div>
    <Heading>Skills & Experience</Heading>
    <p>{data.join(', ')}</p>
  </div>
)

export default Skills
