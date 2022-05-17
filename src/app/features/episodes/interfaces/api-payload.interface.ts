import { Episode } from './episode.interface';
import { Info } from '../../../core/interfaces/info.interface';

export interface ApiPayload {
  info: Info;
  results: Episode[];
}
