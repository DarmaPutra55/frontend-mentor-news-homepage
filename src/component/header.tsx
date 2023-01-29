import { useCallback, useEffect } from "react";
import useDisclosure from "../hooks/useDisclosure";
import logo from "../assets/images/logo.svg";
import side_menu_close_icon from "../assets/images/icon-menu-close.svg";
import side_menu_open_icon from "../assets/images/icon-menu.svg";

export default function Header() {
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
  );
}
