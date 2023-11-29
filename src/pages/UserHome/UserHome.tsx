import { useParams } from 'react-router-dom';
import { getUserInfos } from '../../service/index';
import Heading from '../../components/Heading/Heading';
import BarChart from '../../components/BarChart/BarChart';
import InfoCard from '../../components/InfoCard/InfoCard';
import LineChart from '../../components/LineChart/LineChart';
import RadialBar from '../../components/RadialBar/RadialBar';
import RadarChart from '../../components/RadarChart/RadarChart';
import NotFound from "../404/404";
import styled from 'styled-components';
import calories from "../../assets/calories.svg";
import fat from "../../assets/fat.svg";
import protein from "../../assets/protein.svg";
import carbs from "../../assets/carbs.svg";
import { useEffect, useState } from 'react';
import { UserInfo } from "../../service/types";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  margin-left: clamp(0.5rem, 12.5vw, 23.4rem);
  margin-top: 6.8rem;
  max-width: 113rem;

  @media (max-width: 1500px) {
    margin-left: 0;
    width: 100%;
    padding: 0 2rem;
  }
`;

const ChartsWrapper = styled.div`
  margin-top: 7rem;
  display: flex;
  
  
  @media (max-width: 1500px) {
    flex-direction: column-reverse;
  }
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

  @media (max-width: 1500px) {
    flex-direction: column;
    width: 26.3rem;
    gap: 2rem;
    margin: 0 auto;
  }
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

  @media (max-width: 1500px) {
    margin-left: 0;
  }
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
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState<number | null>(null);

  useEffect(() => {
    if (userId) {
      getUserInfos(userId)
        .then((userData: UserInfo) => {
          setUser(userData);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [userId]);

  const score = user?.score ? user.score : (user?.todayScore ? user?.todayScore : "");

  if (error === 404) {
    return <NotFound />;
  } else if (error === 500) {
    return <></>;
  }

  return (
    <Wrapper>
      {user && <Heading name={`${user.userInfos?.firstName}`} />}
      <ChartsWrapper>
        <ChartsMainContainer>
          {user && <StyledBarChart />}
          <ChartsMainContainerBase>
            {user && <LineChart />}
            {user && <RadarChart />}
            {user && <RadialBar score={Number(score)} />}
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
