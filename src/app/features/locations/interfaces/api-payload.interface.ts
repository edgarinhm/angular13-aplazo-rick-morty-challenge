import { Location } from './locations.interface';
import { Info } from '../../../core/interfaces/info.interface';

export interface ApiPayload {
  info: Info;
  results: Location[];
}
