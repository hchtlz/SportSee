import { Link } from "react-router-dom";
import { userMainData } from "../../service/mocked_data/mockedData";
import styled from "styled-components";

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 88vh;
  justify-content: center;
  margin-left: -11.7rem;
  margin-top: -9rem;
`;

const UserCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-size: 2rem;
  margin: 2rem;
  padding: 2rem;
  position: relative;
  text-align: center;
  z-index: 3;
`;

const ViewProfileButton = styled.button`
  background-color: #e53935;
  border-radius: 0.5rem;
  border: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  position: relative;
  transition: background-color 0.2s ease-in-out;
  z-index: 3;

  &:hover {
    background-color: #e50914 ;
  }
`;

const BlackOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Home() {
  return (
    <HomeContainer>
      {userMainData.map((user) => (
        <UserCard key={user.id}>
          <h3>{user.userInfos.firstName} {user.userInfos.lastName}</h3>
          <StyledLink to={`/id/${user.id}`}>
            <ViewProfileButton>Voir le profil</ViewProfileButton>
          </StyledLink>
        </UserCard>
      ))}
      <BlackOverlay></BlackOverlay>
    </HomeContainer>
  );
}