import React from 'react'
import AccordionCompound from './AccordionCompound'
import EmailForm from './component/email-form/email-form'
import './story-cards.scss';
import imgPK from '../../../../assets/images/PK-en-20220919-popsignuptwoweeks-perspective_alpha_website_small.png'

const StoryCards = () => {


  return (
    <>
      <div className="our-story-cards">
        <div
          className="our-story-card hero-card vlv"
        >
          <div className="our-story-card-background">
            <div
              className="concord-img-wrapper"
            >
              <img
                className="concord-img"
                src={imgPK}
                alt="img=pk"
              />
              <div className="concord-img-gradient"></div>
            </div>
          </div>
          <div className="our-story-card-text">
            <h1
              id=""
              className="our-story-card-title"
            >
              Unlimited movies, TV shows, and more.
            </h1>
            <h2
              id=""
              className="our-story-card-subtitle"
            >
              Watch anywhere. Cancel anytime.
            </h2>

            <h3 className="email-form-title">
              Ready to watch? Enter your email to create or
              restart your membership.
            </h3>
            <EmailForm />
          </div>
        </div>
        <div
          className="our-story-card animation-card watchOnTv"
        >
          <div className="animation-card-container">
            <div className="our-story-card-text">
              <h1
                id=""
                className="our-story-card-title"
              >
                Enjoy on your TV.
              </h1>
              <h2
                id=""
                className="our-story-card-subtitle"
              >
                Watch on Smart TVs, Playstation, Xbox, Chromecast,
                Apple TV, Blu-ray players, and more.
              </h2>
            </div>
            <div className="our-story-card-img-container">
              <div className="our-story-card-animation-container">
                <img
                  alt=""
                  className="our-story-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                />
                <div
                  className="our-story-card-animation"
                >
                  <video
                    className="our-story-card-video"
                    autoPlay
                    playsInline
                    muted
                    loop
                  >
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="our-story-card animation-card downloadAndWatch flipped"
        >
          <div className="animation-card-container">
            <div className="our-story-card-text">
              <h1
                id=""
                className="our-story-card-title"
              >
                Download your shows to watch offline.
              </h1>
              <h2
                id=""
                className="our-story-card-subtitle"
              >
                Save your favorites easily and always have something
                to watch.
              </h2>
            </div>
            <div className="our-story-card-img-container">
              <div className="our-story-card-animation-container">
                <img
                  alt=""
                  className="our-story-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                />
                <div
                  className="our-story-card-animation"
                >
                  <div className="our-story-card-animation-image">
                    <img
                      alt=""
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    />
                  </div>
                  <div className="our-story-card-animation-text">
                    <div id="" className="text-0">
                      Stranger Things
                    </div>
                    <div id="" className="text-1">
                      Downloading...
                    </div>
                  </div>
                  <div
                    className="our-story-card-animation-custom"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="our-story-card animation-card watchOnDevice"
        >
          <div className="animation-card-container">
            <div className="our-story-card-text">
              <h1
                id=""
                className="our-story-card-title"
              >
                Watch everywhere.
              </h1>
              <h2
                id=""
                className="our-story-card-subtitle"
              >
                Stream unlimited movies and TV shows on your phone,
                tablet, laptop, and TV.
              </h2>
            </div>
          </div>
        </div>
        <div
          className="our-story-card animation-card kidsValueProp flipped"
        >
          <div className="animation-card-container">
            <div className="our-story-card-text">
              <h1
                id=""
                className="our-story-card-title"
              >
                Create profiles for kids.
              </h1>
              <h2
                id=""
                className="our-story-card-subtitle"
              >
                Send kids on adventures with their favorite
                characters in a space made just for them—free with
                your membership.
              </h2>
            </div>
            <div className="our-story-card-img-container">
              <div className="our-story-card-animation-container">
                <img
                  alt=""
                  className="our-story-card-img"
                  src="https://occ-0-3631-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="our-story-card " >
          <AccordionCompound />
          <div className='faq-card'>
            <h3 className="email-form-title">
              Ready to watch? Enter your email to create or
              restart your membership.
            </h3>
            <EmailForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default StoryCards