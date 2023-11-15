import { useParams } from "react-router-dom";
import { getUserPerformance } from "../../service/api/data";
import { useEffect, useState } from "react";

export default function UserPerformance() {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserPerformance(userId || "")
      .then((data) => {
        setUserData(data);

      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, [userId]);

  return (
    <div>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}