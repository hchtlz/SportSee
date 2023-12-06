import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { getUserInfos } from '../../service/index';
import styled from 'styled-components';

type RadialBarComponentProps = {
  score: number;
};

const Wrapper = styled.div`
  position: relative;
  background-color: #FBFBFB;
`;

const RadialBarContainer = styled.div`
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 25.8rem;
  width: clamp(20rem, 17vw, 25.8rem);

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const ScoreTitle = styled.h3`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  left: 1rem;
  margin-bottom: 1rem;
  position: absolute;
  top: 1rem;
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
  background: #FFF;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  height: 13.7rem;
  justify-content: center;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transform: translate(-50%, 100%);
  width: 13.7rem;
  z-index: 0;
`;

const RadialBarComponent = ({ score }: RadialBarComponentProps) => {
  const [data, setData] = useState<{ uv: number; name?: string, fill?: string }[]>([{ uv: score, name: 'Score' }]);
  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (userId) {
      getUserInfos(userId)
        .then(() => setData([{ name: 'Score', uv: score }, { name: 'max', uv: 1, fill: '#FBFBFB' }]))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId, score]);

  return (
    <Wrapper>
      <RadialBarContainer>
        <ScoreTitle>Score</ScoreTitle>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart width={258} height={263} cx="50%" cy="50%" innerRadius="60%" barSize={30} data={data} startAngle={90} endAngle={450}>
            <RadialBar 
              fill="#ff0000"
              dataKey="uv"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <InfoText>
          <ScorePercentage>{(score * 100).toFixed(0)}%</ScorePercentage>
          <GoalDescription>de votre objectif</GoalDescription>
        </InfoText>
      </RadialBarContainer>
    </Wrapper>

  );
};

export default RadialBarComponent;
