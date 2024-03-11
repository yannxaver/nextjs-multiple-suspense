import { cache } from "react";

export const getUser = async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Math.random();
};

export const getData = cache(async (user: number): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Math.random() * user;
});
