import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, TooltipProps} from 'recharts';
import { useParams } from 'react-router-dom';
import { getUserActivity } from '../../service/api/data';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 2em;
	height: 320px;
    width: 835px;
	border-radius: 5px;
    background: #FBFBFB;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	padding: 25px;
	
	@media (max-width: 1025px) {
      padding-left:0;
    }
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    margin-right: 1.5rem;
	`

const Title= styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`

const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
`

const Icon = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`

const Legend = styled.div`
	display: flex;
`

const Info = styled.div`
    display: flex;
    align-items:center;
`

interface Payload {
  value: number;
  unit?: string;
  dataKey: string;
}

const TooltipText = (payload: Payload[]) => {
  if (typeof payload[0].unit !== 'undefined') {
    return (
      <p>
        {payload[0].value} {payload[0].unit}
      </p>
    )
  }
  if (payload && payload.length) {
    return payload.map((prop: Payload, id: number) => {
      return prop.dataKey === 'calories' ? (
        <li key={`calories-${id}`}>{prop.value}kCal</li>
      ) : (
        <li key={`calories-${id}`}>{prop.value}Kg</li>
      )
    })
  }

  return ''
}

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        <ul>{TooltipText(payload as Payload[])}</ul>
      </div>
    );
  }

  return null;
}


const UserBarChart = () => {
  const { userId = "" } = useParams<{ userId?: string }>();
  const [userActivityData, setUserActivityData] = useState([]);

  useEffect(() => {
    getUserActivity(userId)
      .then((data) => {
        const sessions = data.data.sessions;
        setUserActivityData(sessions);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, [userId]);

  return (
    <Wrapper>
      <Head>
        <Title>Activité quotidienne</Title>
        <Legend className='Legend'>
          <Info>
            <Icon color='#282D30' />
            <Text>Poids (kg)</Text>
          </Info>
          <Info>
            <Icon color='#E60000' />
            <Text>Calories brûlées (kCal)</Text>
          </Info>
        </Legend>
      </Head>
      <ResponsiveContainer height={200}>
        <BarChart data={userActivityData} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} stroke="1 1" />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={['dataMin - 2', 'dataMax + 1']}
            tickCount={4}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide={true} />
          <Tooltip
            content={CustomTooltip}
            offset={40}
            wrapperStyle={{
              color: '#FFF',
              background: 'red',
              border: 'none',
              outline: 'none',
              width: '5rem',
              height: '8rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              lineHeight: '2.2rem',
              fontSize: '0.7rem'
            }}
          />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default UserBarChart;
