import axios from 'axios';
import { Modal } from 'antd';
import { UserActivityInfo, UserAverageSessionsInfo, UserInfo, UserPerformanceInfo } from '../types';

export const getUserInfosApi = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    return res.data.data as UserInfo;
  } catch (error: Error | any) {
    if (error.response && error.response.status === 404) {
      return Promise.reject(404);
    }
    Modal.error({
      title: 'Erreur API',
      content: `Erreur lors de la récupération des informations de l'utilisateur : ${(error as Error).message}`,
    });
    return Promise.reject(500);
  }
};

export const getUserActivityApi = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
    return res.data as UserActivityInfo;
  } catch (error) {
    Modal.error({
      title: 'Erreur API',
      content: `Erreur lors de la récupération des activités de l'utilisateur : ${(error as Error).message}`,
    });
  }
};

export const getUserAverageSessionsApi = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
    return res.data as UserAverageSessionsInfo;
  } catch (error) {
    Modal.error({
      title: 'Erreur API',
      content: `Erreur lors de la récupération des sessions de l'utilisateur : ${(error as Error).message}`,
    });
  }
};

export const getUserPerformanceApi = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
    return res.data as UserPerformanceInfo;
  } catch (error) {
    Modal.error({
      title: 'Erreur API',
      content: `Erreur lors de la récupération des performances de l'utilisateur : ${(error as Error).message}`,
    });
  }
};
