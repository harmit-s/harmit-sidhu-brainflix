import searchIcon from '../../assets/icons/search.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import brainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/icons/upload.svg';

import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div>
                <a href="/">
                    <img className="header__logo" src={brainFlixLogo} alt='logo' />
                </a>
            </div>
            <div className='header__layout'>
                <form>
                    <label htmlFor="search"></label>
                    <div className="header__search-container">
                        <img src={searchIcon} alt='search icon' className='header__search-icon' />
                        <input
                            type="text"
                            id="search"
                            placeholder="Search"
                            className="header__search-input"
                        />
                    </div>
                </form>
                <img src={avatar} className='header__avatar' alt='avatar' />
            </div>
            <button className='header__button'> <img src={uploadIcon} alt='upload icon' className='header__upload-icon' />UPLOAD</button>
        </header>
    )
}

export default Header;