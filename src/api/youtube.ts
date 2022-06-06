import axios, {AxiosInstance, AxiosResponse, AxiosError} from "axios";
import youtubeVideos from "../constants/youtube_videos.json";
import {YoutubeSearchSearchResults} from "../constants/youtube";

const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";

interface YoutubeSearchParams {
  term?: string;
}

const responseBody = (response: AxiosResponse) => response.data;

const api: AxiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

export const searchYoutubeVideos = (params: YoutubeSearchParams): Promise<YoutubeSearchSearchResults> => {
  return api.get("/search", {
    params: {
      q: params.term,
    },
  }).then(responseBody).catch((err: AxiosError) => err);
};

export const searchDummyYoutubeVideos = (params: YoutubeSearchParams): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve(youtubeVideos);
  });
};

