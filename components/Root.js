import React from 'react'

import Education from './Education'
import Footer from './Footer'
import Head from './Head'
import Header from './Header'
import Misc from './Misc'
import Opensource from './Opensource'
import Skills from './Skills'
import Speaking from './Speaking'
import WorkHistory from './WorkHistory'

const Root = ({ data }) => {
  const { work, speaking, skills, opensource, edu } = data

  return (
    <html>
      <Head title="brendan sudol :: cv" />
      <body>
        <div className="container mx-auto p2 sm-py3">
          <Header {...data} />
          <WorkHistory data={work} />
          <Speaking data={speaking} />
          <Skills data={skills} />
          <Opensource data={opensource} />
          <Education text={edu} />
          <Misc />
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Root
