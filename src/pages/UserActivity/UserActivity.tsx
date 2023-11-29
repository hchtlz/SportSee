import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserActivity } from "../../service/index";
import NotFound from "../404/404";
import { UserActivityInfo } from "../../service/types";

export default function UserActivity() {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState<UserActivityInfo | null>(null);

  useEffect(() => {
    getUserActivity(userId || "")
      .then((data: UserActivityInfo | { data: UserActivityInfo; } | undefined) => {
        if (data && 'data' in data) {
          setUserData(data.data);
        } else {
          setUserData(data as UserActivityInfo);
        }
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
