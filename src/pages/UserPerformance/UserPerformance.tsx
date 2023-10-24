import { useParams } from "react-router-dom";
import userPerformance from "../../service/mocked_data/userPerformance";
import userMainData from "../../service/mocked_data/userMainData";
import styled from "styled-components";

const UserPerformanceContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 80%;
`;

const PerformanceTitle = styled.h1`
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

export default function UserPerformance() {
  const { userId } = useParams();
  const userData = userPerformance.find((data) => data.userId.toString() === userId);

  if (!userData) {
    return <div>Utilisateur non trouvé.</div>;
  }

  const performanceData = userData.data;
  const performanceKind = userData.kind;
  const user = userMainData.find((user) => user.id.toString() === userId);

  return (
    <UserPerformanceContainer>
      <PerformanceTitle>
        Performance de {" "}
        {user ? `${user.userInfos.firstName} ${user.userInfos.lastName}` : "Utilisateur inconnu"}
      </PerformanceTitle>
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>Type d'activité</Th>
              <Th>Valeur</Th>
            </Tr>
          </thead>
          <tbody>
            {performanceData.map((data, index) => (
              <Tr key={index}>
                <Td>{performanceKind[data.kind as keyof typeof performanceKind]}</Td>
                <Td>{data.value}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </UserPerformanceContainer>
  );
}
