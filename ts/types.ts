export type productData = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  mainColor: string;
  tailwindTextColor: string;
};

export type productsResponse = {
  data: Array<productData>;
  error: true | Error;
  pending: boolean;
  refresh: () => Promise<void>;
};
