import { NEWS_API } from "./utils";

export const getNews = async () => {
  try {
    const data = await NEWS_API.get(`/`);
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
