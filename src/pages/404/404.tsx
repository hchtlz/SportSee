import error from '../../assets/404.png';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;


  img {
    width: clamp(200px, 50%, 300px);
    margin-bottom: 20px;
  }
`;

const NotFoundHeading = styled.h2`
  font-size: 2.4em;
  color: #333;
  margin-bottom: 10px;
`;

const NotFoundText = styled.p`
  font-size: 1.2em;
  color: #666;
  text-align: center;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={error} alt="404" />
      <NotFoundHeading>Page non trouvée</NotFoundHeading>
      <NotFoundText>Désolé, la page que vous cherchez n'a pas été trouvée.</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;