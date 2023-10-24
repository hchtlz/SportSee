import { useParams } from "react-router-dom";
import { userActivity, userMainData } from "../../service/mocked_data/mockedData";

export default function UserActivity() {
  const { userId } = useParams();

  const userData = userActivity.find((data) => data.userId.toString() === userId);

  if (!userData) {
    return <div>Utilisateur non trouvé.</div>;
  }

  const activitySessions = userData.sessions;

  const user = userMainData.find((user) => user.id.toString() === userId);

  return (
    <div>
      <pre>{JSON.stringify(activitySessions, null, 2)}</pre>
      <pre>{JSON.stringify(user ? user.keyData : "N/A", null, 2)}</pre>
    </div>
  );
}
