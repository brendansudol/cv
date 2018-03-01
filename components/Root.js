import React from 'react'

import Head from './Head'

const Root = ({ data }) => (
  <html>
    <Head title="TODO" />
    <body>
      <code>{JSON.stringify(data)}</code>
    </body>
  </html>
)

export default Root
