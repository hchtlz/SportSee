import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserPerformance } from "../../service/api/data";

export default function UserPerformance() {
  const { userId } = useParams();
  const [performanceData, setPerformanceData] = useState(null);

  const fetchData = async () => {
    try {
      if (!userId) return;
      const response = await getUserPerformance(userId);
      const performanceData = response.data;

      // Assurez-vous que performanceData contient bien les données que vous voulez afficher
      console.log("Performance Data:", performanceData);

      setPerformanceData(performanceData); // Mettez à jour l'état avec les données de performance
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données de performance :", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  return (
    <div>
      {performanceData && (
        <div>
          <h2>Performance de l'utilisateur</h2>
          <ul>
            {performanceData.data.map((item, index) => (
              <li key={index}>
                {performanceData.kind[item.kind]}: {item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}