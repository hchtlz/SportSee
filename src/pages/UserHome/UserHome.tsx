import { useParams } from "react-router-dom";
import { userMainData } from "../../service/mocked_data/mockedData";
import Heading from "../../components/Heading/Heading";
import BarChart from "../../components/BarChart/BarChart"; 

export default function UserHome() {
  const { userId } = useParams();

  const user = userMainData.find((userData) => userData.id.toString() === userId);

  const scorePercentage = user && user.todayScore ? (user.todayScore * 100).toFixed(0) : null;

  return (
    <div>
      {user ? (
        <div>
          <Heading name={`${user.userInfos.firstName}`} />
          <p>
            <strong>Prénom :</strong> {user.userInfos.firstName}
          </p>
          <p>
            <strong>Nom :</strong> {user.userInfos.lastName}
          </p>
          <p>
            <strong>Âge :</strong> {user.userInfos.age}
          </p>
          <p>
            <strong>Score aujourd'hui :</strong>{" "}
            {scorePercentage !== null ? `${scorePercentage}%` : "N/A"}
          </p>
          <strong>Données clés :</strong>
          <ul>
            <li>
              <strong>Calories :</strong> {user.keyData.calorieCount}
            </li>
            <li>
              <strong>Protéines :</strong> {user.keyData.proteinCount}
            </li>
            <li>
              <strong>Glucides :</strong> {user.keyData.carbohydrateCount}
            </li>
            <li>
              <strong>Lipides :</strong> {user.keyData.lipidCount}
            </li>
          </ul>
        </div>
      ) : (
        <p>Utilisateur non trouvé</p>
      )}
      <BarChart />
    </div>
  );
}
