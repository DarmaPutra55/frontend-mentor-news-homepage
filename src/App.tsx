import React, { useEffect, useCallback } from "react";
import logo from "./assets/images/logo.svg";
import side_menu_close_icon from "./assets/images/icon-menu-close.svg";
import side_menu_open_icon from "./assets/images/icon-menu.svg";
import hero_img_desktop from "./assets/images/image-web-3-desktop.jpg";
import hero_img_mobile from "./assets/images/image-web-3-mobile.jpg";
import footer_img_1 from "./assets/images/image-retro-pcs.jpg";
import footer_img_2 from "./assets/images/image-top-laptops.jpg";
import footer_img_3 from "./assets/images/image-gaming-growth.jpg";
import useDisclosure from "./hooks/useDisclosure";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleWindowResize = useCallback(() => {
    if (window.innerWidth > 375 && isOpen) {
      onClose();
    }
  }, [isOpen]);

  const handleClickShadow = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <div className="container">
      <div className="page">
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="web logo" />
          </div>
          <div id="sidemenu">
            <div
              id="sidemenu-container"
              className={
                isOpen
                  ? "sidemenu-container side-menu-activate"
                  : "sidemenu-container"
              }
            >
              <div className="close-sidemenu-button-container hide-on-desktop">
                <button
                  id="close-submenu-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                  className="transparent-button"
                >
                  <img src={side_menu_close_icon} alt="close icon" />
                </button>
              </div>
              <div className="nav-container">
                <nav>
                  <a href="#">Home</a>
                  <a href="#">New</a>
                  <a href="#">Popular</a>
                  <a href="#">Trending</a>
                  <a href="#">Categories</a>
                </nav>
              </div>
            </div>
            <div
              id="sidemenu-shadow"
              className={isOpen ? "shadow shadow-activate" : "shadow"}
              onClick={handleClickShadow}
            />
            <div className="open-sidemenu-button-container hide-on-desktop">
              <button
                id="open-submenu-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onOpen();
                }}
                className="transparent-button"
              >
                <img src={side_menu_open_icon} alt="open" />
              </button>
            </div>
          </div>
        </header>
        <main className="main">
          <picture className="hero-img">
            <img src={hero_img_desktop} alt="hero" className="hide-on-mobile" />
            <img src={hero_img_mobile} alt="hero" className="hide-on-desktop" />
          </picture>
          <div className="hero-title">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="hero-description">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="transparent-button read-more-button">
              <p>Read More</p>
            </button>
          </div>
        </main>
        <aside className="sidebar">
          <h2>New</h2>
          <div className="sidebar-content-container">
            <section className="sidebar-content">
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </section>
            <hr />
            <section className="sidebar-content">
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </section>
            <hr />
            <section className="sidebar-content">
              <h3>Is VC Funding Drying Up?</h3>
              <p>Private funding by VC firms is down 50% YOY</p>
            </section>
          </div>
        </aside>
        <div className="footer">
          <section className="footer-content">
            <div className="footer-img">
              <img src={footer_img_1} alt="retro pc" />
            </div>
            <div className="footer-description">
              <h2>01</h2>
              <h3>Reviving Retro PCs</h3>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </section>
          <section className="footer-content">
            <div className="footer-img">
              <img src={footer_img_2} alt="top laptop" />
            </div>
            <div className="footer-description">
              <h2>02</h2>
              <h3>Top 10 Laptops of 2022</h3>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </section>
          <section className="footer-content">
            <div className="footer-img">
              <img src={footer_img_3} alt="gaming growth" />
            </div>
            <div className="footer-description">
              <h2>03</h2>
              <h3>The Growth of Gaming</h3>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
