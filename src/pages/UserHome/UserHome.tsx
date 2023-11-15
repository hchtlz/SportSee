import { useParams } from 'react-router-dom';
import { getUserInfos } from '../../service/api/data';
import Heading from '../../components/Heading/Heading';
import BarChart from '../../components/BarChart/BarChart';
import InfoCard from '../../components/InfoCard/InfoCard';
import LineChart from '../../components/LineChart/LineChart';
import RadialBar from '../../components/RadialBar/RadialBar';
import RadarChart from '../../components/RadarChart/RadarChart';
import styled from 'styled-components';
import calories from "../../assets/calories.svg";
import fat from "../../assets/fat.svg";
import protein from "../../assets/protein.svg";
import carbs from "../../assets/carbs.svg";
import { useEffect, useState } from 'react';

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

type UserData = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score?: number;
  todayScore?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

export default function UserHome() {
  const { userId } = useParams();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (userId) {
      getUserInfos(userId)
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId]);

  const score = user?.score ? user.score : (user?.todayScore ? user?.todayScore : "");

  return (
    <Wrapper>
      {user && <Heading name={`${user.userInfos?.firstName}`} />}
      <ChartsWrapper>
        <ChartsMainContainer>
          {user && <StyledBarChart />}
          <ChartsMainContainerBase>
            <LineChart />
            <RadarChart />
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
              <UserInfoCard
                icon={fat}
                value={score.toString()}
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
