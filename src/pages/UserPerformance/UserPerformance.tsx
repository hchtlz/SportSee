import { useParams } from "react-router-dom";
import { userPerformance } from "../../service/mocked_data/mockedData";

export default function UserPerformance() {
  const { userId } = useParams();
  const userData = userPerformance.find((data) => data.userId.toString() === userId);

  if (!userData) {
    return <div>Utilisateur non trouvé.</div>;
  }

  const performanceData = userData.data;

  return (
    <div>
      <pre>{JSON.stringify(performanceData, null, 2)}</pre>
    </div>
  );
}

