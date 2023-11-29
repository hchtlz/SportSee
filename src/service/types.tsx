export type UserInfo = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score?: number;
  todayScore?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

export type UserActivityInfo = {
  userId: number;
  sessions: [
    {
      day: string;
      kilogram: number;
      calories: number;
    }
  ]
};

export type UserAverageSessionsInfo = {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
};

export type UserPerformanceInfo = {
  userId: number;
  kind: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  },
  data: [
    {
      value: number;
      kind: number;
    }
  ]
};
