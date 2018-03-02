import React from 'react'

const WorkHistory = ({ data }) => (
  <div>
    <h2 className="mb2 h3">Work History</h2>
    {data.map(({ title, employer, time, intro, bullets }, i) => (
      <div key={i} className="mb3">
        <h3 className="mt0 mb05 h4">
          {title}, {employer}
        </h3>
        <p className="mb1 h5">{time}</p>
        {intro && <p>{intro}</p>}
        {bullets && (
          <ul className="list-flush">
            {bullets.map((b, i) => (
              <li key={i} className="mb1">
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
)

export default WorkHistory
