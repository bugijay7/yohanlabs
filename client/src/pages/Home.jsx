import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import SelectProjects from '../components/SelectProjects'
import Services from '../components/Services'
import Connect from '../components/Connect'

function Home() {
  return (
    <div>
        <Hero />
        <Highlights />
        <SelectProjects />
        <Services />
        <Connect />
    </div>
  )
}

export default Home