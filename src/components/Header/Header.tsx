import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: black;
  display: flex;
  flex-direction: row;
  height: 9rem;
`;

const NavContainer = styled.nav`
  margin-left: 2.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 2.8rem 0 2.8rem;
  justify-content: space-between;
  width: 100%;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2.4rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #e50914;
  }
`;

const LogoImage = styled.img`
  height: 6rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLink to="/">
          <LogoImage src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/" className="header__link">Accueil</NavLink>
        <NavLink to="/profil" className="header__link">Profil</NavLink>
        <NavLink to="/setting" className="header__link">Réglage</NavLink>
        <NavLink to="/community" className="header__link">Communauté</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
}