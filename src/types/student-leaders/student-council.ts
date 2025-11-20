export type StudentCouncilItemData = {
  id: number;
  name: string;
  image: string;
  year: number;
  designation: string;
};

export type StudentCouncilData = {
  years: number[];
  studentCouncil: {
    [year: number]: StudentCouncilItemData[];
  };
};
