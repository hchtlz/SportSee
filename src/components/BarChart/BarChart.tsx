import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { useParams } from 'react-router-dom';
import { getUserActivity } from '../../service/api/data';

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
    <div>
      <h2>Graphique pour l'utilisateur {userId}</h2>
      <BarChart width={702} height={300} data={userActivityData}>
        <XAxis dataKey="" tickCount={userActivityData.length} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip labelFormatter={(value) => `Session n°${value + 1}`} />
        <Legend />
        <Bar dataKey="kilogram" fill="#8884d8" name="Poids" />
        <Bar dataKey="calories" fill="#82ca9d" name="Calories brûlées" />
      </BarChart>
    </div>
  );
};

export default UserBarChart;
