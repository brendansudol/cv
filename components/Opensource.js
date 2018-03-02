import React from 'react'

import Heading from './Heading'

const Entry = ({ name, url, code, description }) => (
  <div className="mb2">
    <div>{url ? <a href={url}>{name}</a> : <span>{name}</span>}</div>
    <div>{description}</div>
  </div>
)

const Opensource = ({ data }) => (
  <div>
    <Heading>Open-source Projects</Heading>
    <h3 className="mt0 h4">18F</h3>
    {data['18F'].map((d, i) => <Entry key={i} {...d} />)}
    <h3 className="mt0 h4">Personal</h3>
    {data['Personal'].map((d, i) => <Entry key={i} {...d} />)}
  </div>
)

export default Opensource
