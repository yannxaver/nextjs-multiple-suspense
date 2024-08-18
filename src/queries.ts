export const getNewYorkTime = async (): Promise<string> => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York"
  );
  const data = await response.json();
  return data.datetime;
};

export const getLondonTime = async (): Promise<string> => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/London"
  );
  const data = await response.json();
  return data.datetime;
};

export const getUser = async (): Promise<string> => {
  const response = await fetch("https://api.vercel.app/pokemon/1");
  const data = await response.json();
  return data.name;
};
