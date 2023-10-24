import { useParams } from "react-router-dom";
import userActivity from "../../service/mocked_data/userActivity";
import styled from "styled-components";
import userMainData from "../../service/mocked_data/userMainData";
import { formatDate } from "../../helpers/dateFormatter";

const ActivityContainer = styled.div`
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


  &:last-child {
    margin-top: 5rem;
  }
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

export default function UserActivity() {
  const { userId } = useParams();

  const userData = userActivity.find((data) => data.userId.toString() === userId);

  if (!userData) {
    return <div>Utilisateur non trouvé.</div>;
  }

  const activitySessions = userData.sessions;

  const user = userMainData.find((user) => user.id.toString() === userId);

  return (
    <ActivityContainer>
      <ActivityTitle>
        Données d'activité pour l'utilisateur{" "}
        {user ? `${user.userInfos.firstName} ${user.userInfos.lastName}` : "Utilisateur inconnu"}
      </ActivityTitle>
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>Date</Th>
              <Th>Poids (kg)</Th>
              <Th>Calories brûlées</Th>
            </Tr>
          </thead>
          <tbody>
            {activitySessions.map((session, index) => (
              <Tr key={index}>
                <Td>{formatDate(session.day)}</Td>
                <Td>{session.kilogram}</Td>
                <Td>{session.calories}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>Calories (kcal)</Th>
              <Th>Protéines (g)</Th>
              <Th>Glucides (g)</Th>
              <Th>Lipides (g)</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>{user ? user.keyData.calorieCount : "N/A"}</Td>
              <Td>{user ? user.keyData.proteinCount : "N/A"}</Td>
              <Td>{user ? user.keyData.carbohydrateCount : "N/A"}</Td>
              <Td>{user ? user.keyData.lipidCount : "N/A"}</Td>
            </Tr>
          </tbody>
        </Table>
      </TableContainer>
    </ActivityContainer>
  );
}