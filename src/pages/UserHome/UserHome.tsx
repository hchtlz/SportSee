import { useParams } from "react-router-dom";
import { userMainData } from "../../service/mocked_data/mockedData";
import Heading from "../../components/Heading/Heading";
import BarChart from "../../components/BarChart/BarChart"; 

export default function UserHome() {
  const { userId } = useParams();

  const user = userMainData.find((userData) => userData.id.toString() === userId);

  return (
    <div>
      {user && <Heading name={`${user.userInfos.firstName}`} />}
      {user && <BarChart />}
    </div>
  );
}
