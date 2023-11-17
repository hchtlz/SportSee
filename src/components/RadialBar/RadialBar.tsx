import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RadialBarChart, RadialBar } from 'recharts';
import { getUserInfos } from '../../service/api/data';
import styled from 'styled-components';

type RadialBarComponentProps = {
  score: number;
};

const RadialBarContainer = styled.div`
  background-color: #FBFBFB;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ScoreTitle = styled.h3`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const ScorePercentage = styled.p`
  color: black;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const GoalDescription = styled.p`
  color: #282D30;
  font-size: 2rem;
  margin: 0;
  max-width: 9.5rem;
  text-align: center;
`;

const InfoText = styled.div`
  align-items: center;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  height: 16.2rem;
  justify-content: center;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transform: translateX(-50%);
  width: 16.2rem;
  z-index: 0;
`;

const RadialBarComponent = ({ score }: RadialBarComponentProps) => {
  const [data, setData] = useState<{ uv: number; name?: string }[]>([{ uv: score, name: 'Score' }]);
  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (userId) {
      getUserInfos(userId)
        .then(() => setData([{ name: 'Score', uv: score }]))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId, score]);

  return (
    <RadialBarContainer>
      <ScoreTitle>Score</ScoreTitle>
      <RadialBarChart width={258} height={263} cx="50%" cy="50%" innerRadius="70%"  barSize={15} data={data} startAngle={90} endAngle={450}>
        <RadialBar 
        fill="#ff0000"
        background
        dataKey="uv"
      />
      </RadialBarChart>
      <InfoText>
        <ScorePercentage>{(score * 100).toFixed(0)}%</ScorePercentage>
        <GoalDescription>de votre objectif</GoalDescription>
      </InfoText>
    </RadialBarContainer>
  );
};

export default RadialBarComponent;
