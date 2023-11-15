import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserActivity } from "../../service/api/data";

export default function UserActivity() {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserActivity(userId || "")
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