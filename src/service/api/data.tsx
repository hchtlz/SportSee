import axios from 'axios';

export const getUserInfos = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    return res.data.data;
  } catch (error) {
    return Promise.reject(`Erreur lors de la récupération des informations de l'utilisateur : ${(error as Error).message}`);
  }
};

export const getUserActivity = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (error) {
    return Promise.reject(`Erreur lors de la récupération de l'activité de l'utilisateur : ${(error as Error).message}`);
  }
};

export const getUserAverageSessions = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
    return res.data;
  } catch (error) {
    return Promise.reject(`Erreur lors de la récupération des sessions moyennes de l'utilisateur : ${(error as Error).message}`);
  }
};

export const getUserPerformance = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (error) {
    return Promise.reject(`Erreur lors de la récupération des performances de l'utilisateur : ${(error as Error).message}`);
  }
};
