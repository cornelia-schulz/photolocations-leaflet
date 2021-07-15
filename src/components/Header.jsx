function Header() {
    return (
      <header className="header">
        <div className="header-overlay">
          <div className="search-wrapper">
            <h1 className="logo">Photolocations</h1>
            <div className="search">
              <label className="sr-only" htmlFor="search">Search</label>
              <input className="search-field" type="text" id="search" name="search" />
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header