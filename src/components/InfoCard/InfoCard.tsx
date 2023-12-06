import styled from "styled-components";

const CardContainer = styled.div`
  align-items: center;
  background-color: #FBFBFB;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  height: 12.4rem;
  justify-content: center;
  padding-left: 3rem;
  width: clamp(18rem, 15.5vw, 25rem);
  max-width: 25rem;

  @media (max-width: 992px) {
    margin-bottom: 2rem;
  }
`;

const Icon = styled.img`
  height: 6rem;
  width: 6rem;
`;

const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: 2.4rem;
  width: 100%;
`;

const CardValue = styled.p`
  font-size: 2rem;
  font-size: clamp(1.8rem, 1.2vw, 2rem);
  font-weight: 700;
  margin-bottom: 0.4rem;
  margin-top: 0;
`;

const CardLabel = styled.p`
  color: #74798C;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
`;

interface InfoCardProps {
  icon: string;
  value: string;
  label: string;
  measurement: string;
}

export default function InfoCard({ icon, value, label, measurement }: InfoCardProps) {
  /* 
  Convertit la valeur en nombre
  Formate le nombre avec une virgule comme séparateur de milliers 
  */
  const numericValue = parseFloat(value.replace(",", "").replace(".", ""));
  const formattedValue = numericValue.toLocaleString("en-US");
  
  return (
    <CardContainer>
      <Icon src={icon} alt="Icon" />
      <CardInformation>
        <CardValue>
          {formattedValue}
          {measurement}
        </CardValue>
        <CardLabel>{label}</CardLabel>
      </CardInformation>
    </CardContainer>
  );
}