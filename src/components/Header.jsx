import logo from '../images/logo-white.png'

function Header() {
    return (
      <header className="header">
        <div className="header-overlay">
          <div className="search-wrapper">
            <img src={logo} alt="logo" className="header-logo" />
            <h1 className="logo">
              Photolocations
            </h1>
          </div>
        </div>
      </header>
    )
}

export default Header