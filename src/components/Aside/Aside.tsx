import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AsideContainer = styled.aside`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 11.7rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SquareLink = styled(Link)`
  -webkit-box-pack: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 64px;
  min-width: 64px;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 2rem;

  &:hover {
    background-color: #FBECEB;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    display: block;
  }
`;

const Copyright = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  transform: rotate(270deg);
  width: 14rem;
  z-index: 1;
  position: absolute;
  bottom: 8rem;
`;

interface LinkItem {
  logo: string;
  href: string;
  alt: string;
}

interface AsideProps {
  aside_links: LinkItem[];
}

const Aside: React.FC<AsideProps> = ({ aside_links }) => {
  return (
    <AsideContainer>
      <LinkContainer>
        {aside_links.map((link, index) => (
          <SquareLink to={link.href} key={index}>
            <img src={link.logo} alt={link.alt} />
          </SquareLink>
        ))}
      </LinkContainer>
      <Copyright>
        <p>Copyright, SportSee 2020</p>
      </Copyright>
    </AsideContainer>
  );
};

export default Aside;