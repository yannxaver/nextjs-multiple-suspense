export const getUser = async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Math.random();
};

export const getData = async (user: number): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Math.random() * user;
};
