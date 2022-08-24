import React from 'react'
import Footer from './Footer'
import Join from './landingPage/Join'
import TwoImages from './landingPage/TwoImages'

import images from '../data/images'
import Anniversary from './landingPage/Anniversary'

const {discover} = images
const anniversary = {
  subtitle: 'Nike Air Max Flyknit Racer',
  title: '10TH ANNIVERSARY EDITION',
  description: 'This is what happens when two icons collide. The Flyknit Racer’s sock-like upper — rooted in performance — meets the modern Max Air unit.',
  links: [
    {text: "Shop Women's", url: '/'},
    {text: "Shop Men's", url: '/'}
  ]
}

export default function HomePage() {
  return (
    <>
      <div>Welcome to Yumus App!</div>

      <div className="width-95 margin-auto">
        <Anniversary
         subtitle={anniversary.subtitle} 
         title={anniversary.title} 
         description={anniversary.description} 
         links={anniversary.links}
        />
        <TwoImages list={discover} title="Discover our apps" />
        <div className="padding-all-20" />
        <Join />
      </div>

      <div className="padding-all-20" />
      <Footer />
    </>
  )
}
