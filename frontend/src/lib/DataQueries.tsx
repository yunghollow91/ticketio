import { IEventInfo } from "../dto/EventInfo";

export const getEventInfo = async (): Promise<IEventInfo[]> => {
  const path = "/eventTickets";
  const response = await fetch(
    process.env.API_URL || "http://localhost:3001" + path
  ).then((response) => {
    return response;
  });
  if (!response.ok) {
    throw new Error("Request failed " + response.status);
  }
  return await response.json();
};
