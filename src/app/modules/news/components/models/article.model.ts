import {Source} from './submodels/source.model';

export interface Article {
  source: Source;
  author: string | URL;
  title: string;
  description: string;
  url: URL;
  urlToImage: URL;
  publishedAt: string;
  content: string;
}
