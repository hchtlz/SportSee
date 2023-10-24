import { useParams } from "react-router-dom";
import userAverageSessions from "../../service/mocked_data/userAverageSessions";
import userMainData from "../../service/mocked_data/userMainData";
import styled from "styled-components";

const UserAverageSessionsContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 80%;
`;

const ActivityTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

const TableContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #FBECEB;
  font-size: 1.6rem;
  font-weight: 300;
  width: 80%;
`;

const Th = styled.th`
  background-color: #FBECEB;
  padding: 1rem;
  text-align: left;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #FBECEB;
  }
`;

const Td = styled.td`
  border: 1px solid #FBECEB;
  padding: 1rem;
  text-align: left;
`;

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

  // Recherchez le nom de l'utilisateur à partir de vos données d'utilisateur
  const user = userMainData.find((user) => user.id.toString() === userId);

  return (
    <UserAverageSessionsContainer>
      <ActivityTitle>
        Durée moyenne des sessions de{" "}
        {user ? `${user.userInfos.firstName} ${user.userInfos.lastName}` : "Utilisateur inconnu"}
      </ActivityTitle>
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>Jour</Th>
              <Th>Durée moyenne des sessions (minutes)</Th>
            </Tr>
          </thead>
          <tbody>
            {dailyAverageSessions.map((dailySession, index) => (
              <Tr key={index}>
                <Td>{dailySession.day}</Td>
                <Td>{dailySession.averageSessionLength}</Td>
              </Tr>
            ))}
            <Tr>
              <Td>Total Moyen</Td>
              <Td>{roundedAverage}</Td>
            </Tr>
          </tbody>
        </Table>
      </TableContainer>
    </UserAverageSessionsContainer>
  );
}
