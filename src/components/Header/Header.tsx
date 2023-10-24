import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: black;
  display: flex;
  flex-direction: row;
  height: 9rem;
  position: static;
  width: 100%;
  z-index: 2;
`;

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 9rem 0 2.8rem;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 2.4rem;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  z-index: 2;

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