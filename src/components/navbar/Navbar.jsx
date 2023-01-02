import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  //React hooks
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    setLocation(window.location.pathname.toLowerCase());
  }, []);

  return (
    <nav className={style.nav}>
      <div
        onClick={() => setLocation(window.location.pathname)}
        className={location === "/profile" ? style.activeItem : style.item}
      >
        <Link to="/profile">Profile</Link>
      </div>
      <div
        onClick={() => setLocation(window.location.pathname)}
        className={location === "/dialogs" ? style.activeItem : style.item}
      >
        <Link to="/dialogs">Messsages</Link>
      </div>
      <div
        onClick={() => setLocation(window.location.pathname)}
        className={location === "/news" ? style.activeItem : style.item}
      >
        <Link to="/news">News</Link>
      </div>
      <div
        onClick={() => setLocation(window.location.pathname)}
        className={location === "/music" ? style.activeItem : style.item}
      >
        <Link to="/music">Music</Link>
      </div>
      <br />
      <div
        onClick={() => setLocation(window.location.pathname)}
        className={location === "/setting" ? style.activeItem : style.item}
      >
        <Link to="/setting">Setting</Link>
      </div>
    </nav>
  );
};

export default Navbar;
