export type AchieverItemData = {
  id: number;
  name: string;
  description: string;
  year: number;
};

export type AchieversData = {
  years: number[];
  achievers: {
    [year: number]: AchieverItemData[];
  };
};
