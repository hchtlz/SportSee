import { useParams } from "react-router-dom";
import { userAverageSessions } from "../../service/mocked_data/mockedData";


export default function UserAverageSessions() {
  const { userId } = useParams();

  const userData = userAverageSessions.find((data) => data.userId.toString() === userId);

  if (!userData) {
    return <div>Utilisateur non trouvé.</div>;
  }

  const averageSessions = userData.sessions;

  // Calculez la durée moyenne totale des sessions
  const totalSessionLength = averageSessions.reduce((total, session) => total + session.sessionLength, 0);
  const averageSessionLength = totalSessionLength / averageSessions.length;
  const roundedAverage = averageSessionLength.toFixed(0);

  // Calculez la durée moyenne de chaque jour
  const dailyAverageSessions = averageSessions.map((session) => {
    return {
      day: session.day,
      averageSessionLength: session.sessionLength,
    };
  });

  return (
    <div>
      <pre>{JSON.stringify(dailyAverageSessions, null, 2)}</pre>
      <div>
        <p>Total Moyen: {roundedAverage} minutes</p>
      </div>
    </div>
  );
}
