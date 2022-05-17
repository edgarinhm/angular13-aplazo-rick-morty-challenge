import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPayload } from '../interfaces/api-payload.interface';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  findCharacters(page: number = 1, name: string = ''): Observable<ApiPayload> {
    return this.http.get<ApiPayload>(
      this.BASE_URL + `character?page=${page}&name=${name}`,
      {}
    );
  }

  characterById(id: string = ''): Observable<Character> {
    return this.http.get<Character>(this.BASE_URL + `character/${id}`, {});
  }
}
