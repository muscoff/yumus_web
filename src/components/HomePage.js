import React from 'react'
import Footer from './Footer'
import Join from './landingPage/Join'

export default function HomePage() {
  return (
    <>
      <div>Welcome to Yumus App!</div>

      <div className="width-95 margin-auto">
        <Join />
      </div>

      <Footer />
    </>
  )
}
