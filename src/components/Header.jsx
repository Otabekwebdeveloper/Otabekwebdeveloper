import logo from "../image/logo.png"
export default function Headers() {
  return (
    <>
      <div className="container">
        <div className="content">
          <header>
            <div className="header">
              <div className="menu">
                <ul>
                  <li>
                    <a href="/">
                      <i class="fa-sharp fa-solid fa-phone"></i>
                      7756
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa-sharp fa-solid fa-location-dot"></i>
                      Magazin
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa-solid fa-truck-fast"></i>
                      Yetkazib berish zonasi
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fa-regular fa-clock"></i>
                      17:00-17:45
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="menu__1">
                <ul>
                  <li>
                    <a href="/">Bo'sh-ohak</a>
                  </li>
                  <li>
                    <a href="/">Vakansiya</a>
                  </li>
                  <li>
                    <a href="/">Savol Javob</a>
                  </li>
                  <li>
                    <a href="/">Hamkorlar</a>
                  </li>
                  <li>
                    <a href="/">Bonus Dasturi</a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="menu_2">
            <div className="search_panel">
              <div className="katalog">
                <a href="/">
                  <i class="fa-solid fa-magnifying-glass-plus"></i>
                  Katalog
                </a>
                <div className="search__1">
                  <input type="text" placeholder="Nonushta Xarid qilmoq" />
                  <i class="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
              <div className="search">
                <div className="menu_item">
                  <a href="/">Skidka</a>
                  <a href="/">Kabinet</a>
                  <a href="/">Sevimli</a>
                  <a href="/">Korzinka</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
