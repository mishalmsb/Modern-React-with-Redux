import axios, {AxiosResponse} from 'axios';
import {UnsplashImageSearchResults} from '../constants/unsplash';
import unsplashImages from '../constants/unsplash_images.json';

const unsplashApiAccessKey: string = 'cnTz7vvnAKdZnxh5v9sKo1Uex8LaipMQfmp31IKrN6A';
// const unsplashApiSecretKey: string = "wGB95ITIAO1B_5iSkNrJgPrDNN4WVnyzm3XVxBiB2JM";
const unsplashBaseApiUrl: string = 'https://api.unsplash.com';
const unsplashPhotoSearchUrl: string = '/search/photos';

interface UnsplashSearchParams {
  query?: string;
}

const responseBody = (response: AxiosResponse) => response.data;

const unsplashApi = axios.create({
  baseURL: `${unsplashBaseApiUrl}`,
  headers: {
    Authorization: `Client-ID ${unsplashApiAccessKey}`,
  },
});

const requests = {
  get: (url: string, params: UnsplashSearchParams) => unsplashApi.get(url, {params}).then(responseBody),
};

const Unsplash = {
  searchImages: (query: string): Promise<UnsplashImageSearchResults> => requests.get(unsplashPhotoSearchUrl, {query}),
  searchDummyImages: (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      resolve(unsplashImages);
    });
  },
};

export default Unsplash;
