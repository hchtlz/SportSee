import React from "react";
import styled from "styled-components";

interface HeadingProps {
  name: string;
}

const HeadingContainer = styled.div`
  align-items: center;
  display: flex;
`;

const BlackTitle = styled.h1`
  color: black;
  font-size: 4.8rem;
  margin-bottom: 0.4rem;
  margin-right: 0.5rem;
  text-align: left;
`;

const RedName = styled.h1<HeadingProps>`
  color: red;
  font-size: 4.8rem;
  margin-bottom: 0.4rem;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  text-align: left;
`;

const Heading: React.FC<HeadingProps> = ({ name }) => {
  return (
    <div>
      <HeadingContainer>
        <BlackTitle>Bonjour</BlackTitle>
        <RedName name={name}>{name}</RedName>
      </HeadingContainer>
      <Subtitle>Félicitations ! Vous avez explosé vos objectifs hier 👏</Subtitle>
    </div>
  );
};

export default Heading;

