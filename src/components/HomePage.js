import React from 'react'
import Footer from './Footer'
import Join from './landingPage/Join'
import TwoImages from './landingPage/TwoImages'

import images from '../data/images'
import Anniversary from './landingPage/Anniversary'
import Banner from './landingPage/Banner'
import Slide from './landingPage/Slide'

const {discover, backToSchool} = images
const anniversary = {
  subtitle: 'Never Done Playing',
  title: 'SET THEM UP TO WIN',
  description: 'Kick off playtime with game-ready gear for the pitch and beyond.',
  links: [
    {text: "Shop Kid's", url: '/'},
    {text: "Shop All", url: '/'}
  ]
}
const anniversary1 = {
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
      {/* <div>Welcome to Yumus App!</div> */}

      <div className="width-95 margin-auto">
        <Banner img={images.topBanner} />
        <Anniversary
         subtitle={anniversary.subtitle} 
         title={anniversary.title} 
         description={anniversary.description} 
         links={anniversary.links}
        />
        <Slide title="Gear Up" list={images.slideImages1} className="slide1" />
        <div className="padding-all-20" />

        <TwoImages list={backToSchool} title="Back To School Essentials" />
        <div className="padding-all-20" />
        <Slide title="Trending Now" list={images.slideImages2} className="slide2" />
        <div className="padding-all-20" />

        <Banner title="Don't Miss" img={images.banner} />
        <div className="padding-all-20" />
        <Anniversary
         subtitle={anniversary1.subtitle} 
         title={anniversary1.title} 
         description={anniversary1.description} 
         links={anniversary1.links}
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
