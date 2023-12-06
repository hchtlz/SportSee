import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPerformance } from '../../service/index';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const RadarChartContainer = styled.div`
  background-color: #282D30;
  border-radius: 0.5rem;
  width: clamp(20rem, 17.5vw, 25.8rem);
  max-width: 25.8rem;

  @media (max-width: 992px) {
    width: 100%;
  }

  & > .recharts-wrapper {
    position: relative;
    top: 0.9rem;
  }
`;

const RadarChartComponent = () => {
  const [data, setData] = useState([]);
  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (userId) {
      getUserPerformance(userId)
        .then((res) => setData(res.data.data))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId]);

  return (
    <RadarChartContainer>
      < ResponsiveContainer width="100%" height="100%" >
        <RadarChart cx="50%" cy="50%" outerRadius="55%" width={258} height={263} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: 13 }} tickFormatter={(value) => {
            switch (value) {
              case 1:
                return 'Intensité';
              case 2:
                return 'Vitesse';
              case 3:
                return 'Force';
              case 4:
                return 'Endurance';
              case 5:
                return 'Énergie';
              case 6:
                return 'Cardio';
              default:
                return '';
            }
          }} />
          <Radar dataKey="value" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </RadarChartContainer>
  );
};

export default RadarChartComponent;

