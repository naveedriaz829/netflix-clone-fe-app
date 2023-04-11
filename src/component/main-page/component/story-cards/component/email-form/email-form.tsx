import React from 'react'

const EmailForm = () => {

  const handleEmail = () => {

  }

  return (
    <form
      className="cta-form email-form">
      <div className="email-form-lockup">
        <ul className="simpleForm structural ui-grid">
          <li
            className="nfFormSpace field-email"
          >
            <div
              className="nfInput nfInputResponsive"
            >
              <div className="nfInputPlacement">
                <label
                  className="input_id"
                  placeholder="email"
                >
                  <input
                    type="email"
                    name="email"
                    className="nfTextField"
                    id="id_email_hero_fuji"
                    value=""
                    onChange={handleEmail}
                    // tabindex="0"
                    autoComplete="email"
                    // maxLength="50"
                    // minLength="5"
                    dir=""
                  />
                  <label
                    // for="id_email_hero_fuji"
                    className="placeLabel"
                  >
                    Email address
                  </label>
                </label>
              </div>
            </div>
          </li>
        </ul>
        <div className="our-story-cta-container cta-link-wrapper">
          <button
            className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom"
            type="submit"
            // autoComplete= {false}
            // tabindex="0"
            role="link"
          >
            <span id="" className="cta-btn-txt">
              Get Started
            </span>
            <span
              id=""
              className="chevron-right-arrow"
            >
              <svg
                viewBox="0 0 6 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>chevron</desc>
                <path
                  d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                  fill="none"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default EmailForm