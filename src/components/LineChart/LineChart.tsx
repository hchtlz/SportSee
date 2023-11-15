import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useParams } from 'react-router-dom';
import { getUserAverageSessions } from '../../service/api/data';
import styled from 'styled-components';

const LineChartTitle = styled.h2`
  color: hsla(0,0%,100%,.514);
  font-size: 1.5rem;
  font-weight: 700;
  left: 3.4rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  margin: 0;
  max-width: 14.7rem;
  padding: 0;
  position: absolute;
  top: 2.9rem;
`;

const CustomLineChartContainer = styled.div`
  background-color: #ff0000;
  border-radius: 0.5rem;
  padding: 1.5rem 0;
  position: relative;
`;

const CustomLineChart = styled(LineChart)`
  .recharts-cartesian-axis-tick-value {
    fill: white;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 13rem;
    opacity: 0.5;
  }
`;

const CustomTooltipContent = styled.div`
  background-color: white;
  color: black;
  font-weight: 500;
  padding: 0.2rem 0.7rem;
  position: relative;
  text-align: center;
`;

const LineChartComponent = () => {
  const [data, setData] = useState([]);
  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (userId) {
      getUserAverageSessions(userId)
        .then((res) => setData(res.data.sessions))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId]);

  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  type CustomTooltipProps = {
    active: boolean;
    payload?: { value: number }[];
  };

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltipContent>
          <p>{`${payload[0].value} min`}</p>
        </CustomTooltipContent>
      );
    }
  
    return null;
  };

  return (
    <CustomLineChartContainer>
      <LineChartTitle>Durée moyenne des sessions</LineChartTitle>
      <CustomLineChart width={258} height={263} data={data}>
        <XAxis         
          dataKey="day"
          axisLine={false}
          tickFormatter={(value) => daysOfWeek[value - 1]} 
          tickLine={false}
          tickMargin={20}
        />
        <YAxis 
          hide={true}
          domain={[0, 100]}
          tickCount={5}
        />
        <Tooltip content={<CustomTooltip active={false} />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.7)"
          dot={false}
          strokeWidth={3}
          connectNulls
        />
      </CustomLineChart>
    </CustomLineChartContainer>
  );
};

export default LineChartComponent;
