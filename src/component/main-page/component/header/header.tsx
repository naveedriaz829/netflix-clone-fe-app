
import logo from '../../../../assets/images/logo.svg';
import './header.scss';

const Header = () => {
    return (
        <>
            <div className="our-story-header-wrapper">
                <div className="our-story-header"
                >
                    <span
                        className="nfLogo"
                    >
                        <img className='svg-icon svg-icon-netflix-logo' src={logo} alt="logo" />
                    </span>
                    <a
                        href="#"
                        className="authLinks redButton"
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header