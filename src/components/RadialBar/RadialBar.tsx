import React, { useEffect, useState } from 'react';
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ScoreTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
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

const RadialBarComponent = ({ score }: RadialBarComponentProps) => {
  const [data, setData] = useState<{ uv: number; name?: string }[]>([{ uv: score, name: 'Score' }]);
  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (userId) {
      getUserInfos(userId)
        .then((res) => setData([{ name: 'Score', uv: score }]))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId, score]);

  return (
    <RadialBarContainer>
      <ScoreTitle>Score</ScoreTitle>
      <RadialBarChart width={258} height={263} cx={130} cy={130} innerRadius={800} outerRadius={60} barSize={10} data={data}>
        <RadialBar fill="#ff0000" background dataKey="uv" />
      </RadialBarChart>
      <ScorePercentage>{(score * 100).toFixed(0)}%</ScorePercentage>
      <GoalDescription>de votre objectif</GoalDescription>
    </RadialBarContainer>
  );
};

export default RadialBarComponent;
