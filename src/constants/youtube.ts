export const YoutubeVideoSrc = `https://www.youtube.com/embed/`;

export interface YoutubeVideoId {
  kind: string;
  videoId: string;
}

export interface YoutubeVideoThumbnail {
  height: number;
  url: string;
  width: number;
}

export enum YoutubeVideoThumbnailTypes {
  DEFAULT = "default",
  HIGH = "high",
  MEDIUM = "medium",
}

export interface YoutubeVideoThumbnails {
  [YoutubeVideoThumbnailTypes.DEFAULT]: YoutubeVideoThumbnail;
  [YoutubeVideoThumbnailTypes.HIGH]: YoutubeVideoThumbnail;
  [YoutubeVideoThumbnailTypes.MEDIUM]: YoutubeVideoThumbnail;
}

export interface YoutubeVideoDetail {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: YoutubeVideoThumbnails;
  title: string;
}

export interface YoutubeVideo {
  etag: string;
  id: YoutubeVideoId;
  snippet: YoutubeVideoDetail;
  kind: string;
}

export interface YoutubeSearchPagination {
  totalResults?: number;
  resultsPerPage?: number;
}

export interface YoutubeSearchSearchResults {
  items: YoutubeVideo[];
  pageInfo: YoutubeSearchPagination;
}
