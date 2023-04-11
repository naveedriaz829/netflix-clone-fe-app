import React from 'react'
import Footer from '../footer/footer'
import Header from './component/header/header'
import StoryCards from './component/story-cards/story-cards'

const MainPage = () => {
  return (
    <div id="appMountPoint">
      <div className="netflix-sans-font-loaded">
          <div className="our-story-container">
            <div>
              <Header />
            </div>

            <div>
              <StoryCards />
            </div>
            <div>
              <Footer />
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainPage