import axios, {AxiosInstance, AxiosResponse, AxiosError} from "axios";
// import wikipediaDummyData from "../constants/wikipedia.json";
// import {YoutubeSearchSearchResults} from "../constants/youtube";

interface WikipediaSearchParams {
  term?: string;
}

const responseBody = (response: AxiosResponse) => response.data;

const api: AxiosInstance = axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
  params: {
    action: "query",
    list: "search",
    origin: "*",
    format: "json",
  },
});

export const searchWikipedia = (params: any): Promise<any> => {
  return api.get("/search", {
    params: {
      srsearch: params.term,
    },
  }).then(responseBody).catch((err: AxiosError) => err);
};

// export const searchDummyWikipedia = (params: any): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     resolve(wikipediaDummyData);
//   });
// };
