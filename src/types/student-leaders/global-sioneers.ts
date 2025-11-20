export type GlobalSioneerItemData = {
  id: number;
  name: string;
  image: string;
  year: number;
  instituteName: string;
};

export type GlobalSioneersData = {
  years: number[];
  globalSioneers: {
    [year: number]: GlobalSioneerItemData[];
  };
};
