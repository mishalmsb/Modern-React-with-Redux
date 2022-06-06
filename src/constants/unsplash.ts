export interface UnsplashImageUrls {
  raw?: string;
  full?: string;
  regular?: string;
  small?: string;
  thumb?: string;
}

export interface UnsplashImageLinks {
  self?: string;
  html?: string;
  download?: string;
}

export interface UnsplashImage {
  id?: string;
  created_at?: string;
  width?: number;
  height?: number;
  color?: string;
  description?: string;
  urls?: UnsplashImageUrls;
  links?: UnsplashImageLinks;
}

export interface UnsplashImageSearchResults {
  total?: number;
  total_pages?: number;
  results?: UnsplashImage[];
}
