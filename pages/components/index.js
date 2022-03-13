import React, { Fragment } from 'react'
import Projects from './Projects'
import About from './About'
import Heading from './Heading'
import Experience from './Experience'
import Recommandations from './Recommandation'

const UpdateComponent = () => {
  return (
    <Fragment>
        <Heading />
        <About />
        <Projects />
        {/* <Experience /> */}
        <Recommandations />
    </Fragment>
  )
}

export default UpdateComponent