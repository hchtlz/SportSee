import { useParams } from "react-router-dom";
import { userPerformance } from "../../service/mocked_data/mockedData";
import { getUserPerformance } from "../../service/api/data";

export default function UserPerformance() {
  const { userId } = useParams();
  const userData = userPerformance.find((data) => data.userId.toString() === userId);

  if (!userData) {
    return <div>Utilisateur non trouvé.</div>;
  }

  const performanceData = userData.data;
  
  
  /* TEST : Afficher dans la console les datas en utilisant Axios et l'API */
  if (userId) {
    getUserPerformance(userId)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }

  return (
    <div>
      <pre>{JSON.stringify(performanceData, null, 2)}</pre>
    </div>
  );
}

