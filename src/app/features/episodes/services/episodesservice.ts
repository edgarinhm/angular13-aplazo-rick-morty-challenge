import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPayload } from '../interfaces/api-payload.interface';
import { Episode } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private BASE_URL = `${environment.API_URL}episode`;

  constructor(private http: HttpClient) {}

  findEpisodes(page: number = 1, name: string = ''): Observable<ApiPayload> {
    return this.http.get<ApiPayload>(
      this.BASE_URL + `?page=${page}&name=${name}`,
      {}
    );
  }

  findEpisodeById(id: string = ''): Observable<Episode> {
    return this.http.get<Episode>(this.BASE_URL + `/${id}`, {});
  }
}
