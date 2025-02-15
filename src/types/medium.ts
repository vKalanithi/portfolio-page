export interface FeedItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  enclosure: Record<string, unknown>;
  categories: string[];
}

export interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface MediumResponse {
  status: string;
  feed: Feed;
  items: FeedItem[];
}
