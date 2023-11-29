import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, TooltipProps} from 'recharts';
import { useParams } from 'react-router-dom';
import { getUserActivity } from '../../service/index';
import { UserActivityInfo } from "../../service/types";
import styled from 'styled-components';

const Wrapper = styled.div`
	border-radius: 0.5rem;
	box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.0212249);
	height: 32rem;
	padding: 2.5rem;
  background: #FBFBFB;
  margin-bottom: 2em;
  width: 83.5rem;

  @media (max-width: 1500px) {
    width: 100%;
  }
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  margin-right: 1.5rem;
	`

const Title= styled.h2`
  color: #20253A;
  font-size: 1.5rem;
  line-height: 2.4rem;
`

const Text = styled.p`
	color: #74798c;
	font-size: 1.4rem;
	font-weight: 500;
	margin-left: 1rem;
`

const Icon = styled.div`
	align-self: center;
  background-color: ${(props) => props.color};
	border-radius: 50%;
	height: 0.8rem;
	margin-left: 3rem;
	width: 0.8rem
`

const Legend = styled.div`
	display: flex;
`

const Info = styled.div`
  align-items:center;
  display: flex;
`

/* Fonction qui génère le contenu de la tooltip en fonction des données reçues */
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
    );
  }
  if (payload && payload.length) {
    return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {payload.map((prop: Payload, id: number) => (
          <li key={`calories-${id}`}>{prop.dataKey === 'calories' ? `${prop.value}kCal` : `${prop.value}Kg`}</li>
        ))}
      </ul>
    );
  }

  return '';
};

/* Composant personnalisé de la tooltip */
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        {TooltipText(payload as Payload[])}
      </div>
    );
  }

  return null;
};

/* Composant personnalisé pour les étiquettes de l'axe X */
interface AxisTickProps {
  payload: {
    value: string;
  };
  x: number;
  y: number;
}

const CustomizedAxisTick = ({payload, x, y}: AxisTickProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={25} fill="#999" fontSize={14} textAnchor="middle">
        {Number(payload.value.slice(8))}
      </text>
    </g>
  )
}

const UserBarChart = () => {
  const { userId = "" } = useParams<{ userId?: string }>();
  const [userActivityData, setUserActivityData] = useState<UserActivityInfo | null>(null);

  useEffect(() => {
    getUserActivity(userId)
      .then((data : any) => {
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
        <BarChart data={userActivityData as any} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis 
            dataKey="day" 
            tickLine={false} 
            tick={CustomizedAxisTick} 
            axisLine={{ stroke: '#DEDEDE' }}
            /* scale='point' */
            /* padding={{ left: 10 }} */
            /* interval={0}  */
          />
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
              fontSize: '1rem'
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
