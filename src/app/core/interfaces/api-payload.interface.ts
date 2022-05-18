import { Info } from './info.interface';
export interface ApiPayload<T> {
  info: Info;
  results: T[];
}
