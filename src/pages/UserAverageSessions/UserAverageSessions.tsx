import { useParams } from "react-router-dom";
import { getUserAverageSessions } from "../../service/api/data";
import { useEffect, useState } from "react";

export default function UserAverageSessions() {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserAverageSessions(userId || "")
      .then((data) => {
        console.log(data);
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