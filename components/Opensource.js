import React from 'react'

import Heading from './Heading'

const Entry = ({ name, url, code, description }) => (
  <div className="mb2">
    <div>
      <span className="mr05 bold">{name}</span>
      <span className="h6">
        {'('}
        {url && <a href={url}>site</a>}
        {url && ' / '}
        <a href={code}>code</a>
        {')'}
      </span>
    </div>
    <div>{description}</div>
  </div>
)

const Opensource = ({ data }) => (
  <div>
    <Heading>Open-source Projects</Heading>
    <h3 className="mt0 mb2 h4 regular">18F:</h3>
    {data['18F'].map((d, i) => <Entry key={i} {...d} />)}
    <h3 className="mt0 mb2 h4 regular">Personal:</h3>
    {data['Personal'].map((d, i) => <Entry key={i} {...d} />)}
    <p>
      Additional projects and experiments can be found on my{' '}
      <a href="https://brendansudol.com/projects/">personal site</a> and{' '}
      <a href="https://github.com/brendansudol?tab=repositories">GitHub</a>.
    </p>
  </div>
)

export default Opensource
