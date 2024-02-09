import React, { useState } from "react";
import "./NavMenu.css";

function NavMenu() {
  const [active, setActive] = useState("nav_menu");
  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");
  };
  return (
    <>
      <section id="nav-bar" className="container">
        <header className="nav-bar">
          <div className="hamburger flexSB">
            <nav>
              <ul className={active}>
                <li>
                  <a href="#home">Početna</a>
                </li>
                <li>
                  <a href="#about">O nama</a>
                </li>
                <li>
                  <a href="#parfumes">Parfemi</a>
                </li>
                <li>
                  <a href="#contact">Kontakt</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
}

export default NavMenu;
