import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPerformance } from '../../service/api/data';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';

const RadarChartContainer = styled.div`
  background-color: #282D30;
  border-radius: 0.5rem;

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
      <RadarChart outerRadius={90} width={258} height={263} data={data}>
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
    </RadarChartContainer>
  );
};

export default RadarChartComponent;

