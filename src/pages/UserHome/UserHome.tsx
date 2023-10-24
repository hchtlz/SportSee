import { useParams } from "react-router-dom";
import userMainData from "../../service/mocked_data/userMainData";
import Heading from "../../components/Heading/Heading";

export default function UserHome() {
  const { userId } = useParams();

  const user = userMainData.find((userData) => userData.id.toString() === userId);

  return (
    <div>
      {user ? (
        <Heading name={`${user.userInfos.firstName}`} />
      ) : (
        <p>Utilisateur non trouvé</p>
      )}
    </div>
  );
}