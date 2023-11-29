import { UserActivityInfo, UserAverageSessionsInfo, UserInfo, UserPerformanceInfo } from "../types";
import { userActivity, userAverageSessions, userMainData, userPerformance } from "./mockedData";

export const getUserInfosMocked = async (id: string) => {
  return userMainData.find((user) => user.id === Number(id)) as UserInfo;
};

export const getUserActivityMocked = async (id: string) => {
  return { data : userActivity.find((user) => user.userId === Number(id)) as UserActivityInfo };
};

export const getUserAverageSessionsMocked = async (id: string) => {
  return { data : userAverageSessions.find((user) => user.userId === Number(id)) as UserAverageSessionsInfo };
};

export const getUserPerformanceMocked = async (id: string) => {
  return { data : userPerformance.find((user) => user.userId === Number(id)) as UserPerformanceInfo };
};