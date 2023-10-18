import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <Link to="/" className="header__link">Accueil</Link>
        <Link to="/profil" className="header__link">Profil</Link>
        <Link to="/setting" className="header__link">Réglage</Link>
        <Link to="/community" className="header__link">Communauté</Link>
      </nav> 
    </header>
  );
}
