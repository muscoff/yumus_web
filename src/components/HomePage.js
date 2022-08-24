import React from 'react'
import Footer from './Footer'
import Join from './landingPage/Join'
import TwoImages from './landingPage/TwoImages'

import images from '../data/images'

const {discover} = images

export default function HomePage() {
  return (
    <>
      <div>Welcome to Yumus App!</div>

      <div className="width-95 margin-auto">
        <TwoImages list={discover} title="Discover our apps" />
        <div className="padding-all-20" />
        <Join />
      </div>

      <Footer />
    </>
  )
}
