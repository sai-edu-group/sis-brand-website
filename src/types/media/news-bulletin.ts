export type NewsBulletinData = {
  id: number;
  years: number[];
  releases: {
    [year: number]: NewsBulletinItemData[];
  };
};

export type NewsBulletinItemData = {
  id: number;
  name: string;
  image: string;
};
