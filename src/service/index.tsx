import { getUserActivityApi, getUserAverageSessionsApi, getUserInfosApi, getUserPerformanceApi } from "./api";
import { getUserActivityMocked, getUserAverageSessionsMocked, getUserInfosMocked, getUserPerformanceMocked } from "./mocked_data";

type Service = "api" | "mocked_data";
const service: Service = import.meta.env.VITE_SERVICE;

export const getUserInfos = async (id: string) => {
  if (service === "mocked_data") {
    return getUserInfosMocked(id);
  } else {
    return getUserInfosApi(id);
  }
};

export const getUserActivity = async (id: string) => {
  if (service === "mocked_data") {
    return getUserActivityMocked(id);
  } else {
    return getUserActivityApi(id);
  }
};

export const getUserAverageSessions = async (id: string) => {
  if (service === "mocked_data") {
    return getUserAverageSessionsMocked(id);
  } else {
    return getUserAverageSessionsApi(id);
  }
}

export const getUserPerformance = async (id: string) => {
  if (service === "mocked_data") {
    return getUserPerformanceMocked(id);
  } else {
    return getUserPerformanceApi(id);
  }
}