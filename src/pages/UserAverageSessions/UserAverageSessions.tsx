import { useParams } from "react-router-dom";
import { getUserAverageSessions } from "../../service/api/data";
import { useEffect, useState } from "react";
import NotFound from "../404/404";

export default function UserAverageSessions() {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserAverageSessions(userId || "")
      .then((data) => {
        setUserData(data);

      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, [userId]);

  if (!userData) {
    return <NotFound />;
  }

  return (
    <div>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}