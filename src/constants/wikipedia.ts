export interface WikipediaSearchPaginationCount {
  totalhits: number;
}

export interface WikipediaSearchResultDetail {
  ns: number;
  pageid: number;
  size: number;
  snippet: string;
  timestamp: Date;
  title: string;
  wordcount: number;
}

export interface WikipediaSearchResultsInfo {
  searchinfo: WikipediaSearchPaginationCount;
  search: WikipediaSearchResultDetail[];
}

export interface WikipediaSearchPagination {
  sroffset: number;
  continue: string;
}

export interface WikipediaSearchResults {
  continue: WikipediaSearchPagination;
  query: WikipediaSearchResultsInfo;
}
