import React from 'react';
import { useParams } from 'react-router-dom';
import { userMainData } from '../../service/mocked_data/mockedData';
import Heading from '../../components/Heading/Heading';
import BarChart from '../../components/BarChart/BarChart';
import RadialBar from '../../components/RadialBar/RadialBar';
import InfoCard from '../../components/InfoCard/InfoCard';
import styled from 'styled-components';
import calories from "../../assets/calories.svg";
import fat from "../../assets/fat.svg";
import protein from "../../assets/protein.svg";
import carbs from "../../assets/carbs.svg";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  margin-left: 23.4rem;
  margin-top: 6.8rem;
  max-width: 113rem;
`;

const ChartsWrapper = styled.div`
  margin-top: 7rem;
  display: flex;
`;

const ChartsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChartsMainContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const RandomDiv2 = styled.div`
  background: snow;
  height: 10rem;
  width: 100%;
`;

const RandomDiv3 = styled.div`
  background: mintcream;
  height: 10rem;
  width: 100%;
`;

const StyledBarChart = styled(BarChart)`
  width: 100%;
`;

const ChartAsides = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin-left: 2rem;
  width: 100%;
`;

const UserInfoCard = styled(InfoCard)`
  height: 100%;
  width: 100%;
  margin-top: 0;
  padding: 1rem;
  background: purple;
`;

export default function UserHome() {
  const { userId } = useParams();
  const user = userMainData.find((userData) => userData.id.toString() === userId);

  return (
    <Wrapper>
      {user && <Heading name={`${user.userInfos.firstName}`} />}
      <ChartsWrapper>
        <ChartsMainContainer>
          {user && <StyledBarChart />}
          <ChartsMainContainerBase>
            <RandomDiv2>Div 2</RandomDiv2>
            <RandomDiv3>Div 3</RandomDiv3>
            <RadialBar />
          </ChartsMainContainerBase>
        </ChartsMainContainer>
        <ChartAsides>
          {user && (
            <>
              <UserInfoCard
                icon={calories}
                value={user.keyData.calorieCount.toString()}
                label="Calories"
                measurement="kCal"
              />
              <UserInfoCard
                icon={protein}
                value={user.keyData.proteinCount.toString()}
                label="Protéines"
                measurement="g"
              />
              <UserInfoCard
                icon={carbs}  
                value={user.keyData.carbohydrateCount.toString()}
                label="Glucides"
                measurement="g"
                />
              <UserInfoCard
                icon={fat}
                value={user.keyData.lipidCount.toString()}
                label="Lipides"
                measurement="g"
              />
            </>
          )}
        </ChartAsides>
      </ChartsWrapper>
    </Wrapper>
  );
}
