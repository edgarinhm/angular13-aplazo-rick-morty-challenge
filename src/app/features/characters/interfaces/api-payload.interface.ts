import { Character } from './character.interface';
export interface ApiPayload {
  info: { count: number; pages: number };
  results: Character[];
}
